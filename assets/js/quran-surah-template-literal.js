var quranSurahTemplateStart = `
<h2 class="quran-surah-title">Quran Surah</h2>
`;

// Quran Surah Tab HTML Template
function quranSurahTemplate(surah) {
  return `
      <div class="quran-surah-with-tab">
          <button class="surah surahName" data-surah-number="${surah.chapter}">${surah.chapter} : ${surah.name}</button>
          <div class="panel">
            <ul>
              <li><span class="surah-details">Surah English Name : </span>${surah.english_name}</li>
              <li><span class="surah-details">Surah English Name Translation : </span> ${surah.english_name_translation}</li>
              <li><span class="surah-details">No. of Verses : </span> ${surah.verses_count}</li>
            </ul>
            <div class="ayahs-content"></div>
          </div>
  `;
}

// Function to fetch and display Surah content (Arabic and Translation)
function loadSurahContent(surahNumber, panelElement) {
  const ayahsContainer = panelElement.querySelector('.ayahs-content');
  if (!ayahsContainer) {
    console.error('Ayahs container not found in panel:', panelElement);
    // Attempt to provide feedback even if the specific container is missing, though this indicates an HTML structure issue.
    panelElement.innerHTML = '<p style="color: red;">Error: Could not find content area in this panel.</p>';
    return;
  }
  ayahsContainer.innerHTML = '<p>Loading...</p>';

  const arabicUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/quran-uthmani/${surahNumber}.json`;
  const translationUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-sahihinternational/${surahNumber}.json`;

  const fetchArabic = fetch(arabicUrl).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} for Arabic text (Surah ${surahNumber})`);
    }
    return response.json();
  });

  const fetchTranslation = fetch(translationUrl).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} for Translation (Surah ${surahNumber})`);
    }
    return response.json();
  });

  Promise.all([fetchArabic, fetchTranslation])
    .then(([arabicData, translationData]) => {
      const arabicVerses = arabicData.chapter;
      const translationVerses = translationData.chapter;

      if (!arabicVerses || !translationVerses || arabicVerses.length !== translationVerses.length) {
        ayahsContainer.innerHTML = '<p style="color: red;">Error: Data mismatch or missing verses when processing Surah ' + surahNumber + '.</p>';
        console.error("Data mismatch or missing verses for Surah " + surahNumber, arabicData, translationData);
        return;
      }

      let content = '';
      if (arabicVerses.length === 0) { // Handle case of empty chapter data
        content = '<p>No verses found for this Surah in the selected editions.</p>';
      } else {
        for (let i = 0; i < arabicVerses.length; i++) {
          content += `
            <div class="ayah">
              <p class="arabic-text">${(arabicVerses[i] && arabicVerses[i].text) || 'Arabic text not available.'}</p>
              <p class="translation-text">${(translationVerses[i] && translationVerses[i].text) || 'Translation not available.'}</p>
            </div>
          `;
        }
      }
      ayahsContainer.innerHTML = content;
    })
    .catch(error => {
      console.error(`Error fetching content for Surah ${surahNumber}:`, error);
      ayahsContainer.innerHTML = `<p style="color: red;">Sorry, the content for this Surah could not be loaded. Please check your internet connection and try again.</p><p style="font-size: 0.8em; color: #555;">Details: ${error.message}</p>`;
    });
}

// Fetch initial Surah list and render
fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} while fetching Surah list.`);
    }
    return response.json();
  })
  .then(data => {
    const surahs = data.chapters || data;
    if (!surahs || surahs.length === 0) {
      throw new Error("No Surah data received from API. The list may be empty or the API structure might have changed.");
    }
    const quranSurahContainer = document.getElementById("quran-surah");

    quranSurahContainer.innerHTML = `
      ${quranSurahTemplateStart}
      ${surahs.map(quranSurahTemplate).join("")}
    `;

    quranSurahContainer.addEventListener('click', function(event) {
      const targetButton = event.target.closest('.surahName');
      if (targetButton) {
        const surahNumber = targetButton.dataset.surahNumber;
        const panel = targetButton.nextElementSibling;
        if (surahNumber && panel) {
          const ayahsContent = panel.querySelector('.ayahs-content');
          // Simple check to avoid reloading if content is already there and not an error/loading message.
          // This is a basic toggle-like behavior prevention.
          if (ayahsContent && ayahsContent.children.length > 0 &&
              !ayahsContent.innerHTML.includes('<p>Loading...</p>') &&
              !ayahsContent.innerHTML.includes('<p style="color: red;">')) {
            // console.log(`Content for Surah ${surahNumber} appears to be loaded. Toggle or do nothing.`);
            // return; // Uncomment to prevent reload
          }
          loadSurahContent(surahNumber, panel);
        }
      }
    });
  })
  .catch(error => {
    console.error("Error fetching Surah list:", error);
    const quranSurahContainer = document.getElementById("quran-surah");
    if (quranSurahContainer) {
        quranSurahContainer.innerHTML = `
        ${quranSurahTemplateStart}
        <p style="color: red;">Failed to load Surah information. Please check your connection and try again.</p>
        <p style="font-size: 0.8em; color: #555;">Details: ${error.message}</p>
      `;
    }
  });
