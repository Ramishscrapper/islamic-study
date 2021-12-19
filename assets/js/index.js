// Header Web Component
class WebsiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <nav>
                <div class="logo">
                    <a href="index.html"><span>Islamic Study</span></a>
                </div>
                <div class="menu-wrap">
                    <input type="checkbox" class="toggler">
                    <div class="hamburger">
                        <div></div>
                    </div>
                    <div class="menu">
                        <div>
                            <div>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="quran.html">Quran</a></li>
                                    <!-- <li><a href="comingsoon.html">Hadith</a></li>
                        <li><a href="comingsoon.html">Others</a></li> -->
                        <!-- <li><a href="wallpaper.html">Wallpaper</a></li> -->
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        `;
  }
}
customElements.define("website-header", WebsiteHeader);

// Footer Web Component
class WebsiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `       
            <footer>
                <section class="text-gray-500 bg-gray-900 body-font relative" id="four">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-12">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white contact">
                                Contact
                            </h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                                If you find any mistake and see improvements in any section feel free to suggest me
                            </p>
                        </div>
                        <!-- contact1 -->
                        <section class="w3l-simple-contact-form1">
                            <div class="contact-form section-gap">
                                <div class="wrapper">
                                    <div class="contact-form" style="margin: 0 auto;">
                                        <div class="form-mid">
                                            <form action="javascript:sendmail()" method="post">
                                                <div class="field">
                                                    <input type="text" class="form-control" name="Name" id="Name" placeholder="Name"
                                                        required="">
                                                </div>
                                                <div class="field">
                                                    <input type="email" class="form-control" name="Sender" id="Sender"
                                                        placeholder="Email"
                                                        required="">
                                                </div>
                                                <div class="field">
                                                    <input type="text" class="form-control" name="Subject" id="Subject"
                                                        placeholder="Subject"
                                                        required="">
                                                </div>
                                                <textarea name="Message" class="form-control" id="Message" placeholder="Message"
                                                        required=""></textarea>
                                                <button type="submit" class="btn btn-contact">Send Message</button>
                                                <!-- <input type="button" class="btn btn-contact" onclick="sendmail();"  value="Send Message"> -->

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- /contact1 -->
                        <div class="lg:w-1/2 md:w-2/3 mx-auto">
                            <div class="flex flex-wrap -m-2">
                                <div class="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                                    <a class="text-teal-500">ramishscrapper@gmail.com</a>
                                    <br><br>
                                    <span class="inline-flex">
                                            <a class="text-gray-500" href="https://www.facebook.com/TechwithCoding">
                                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a class="ml-4 text-gray-500" href="https://twitter.com/TechwithCoding1">
                                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path
                                                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                                    </path>
                                                </svg>
                                            </a>
                                            <a class="ml-4 text-gray-500" href="https://www.instagram.com/tech_with_coding/">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                                </svg>
                                            </a>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="subtite">
                        <span
                        >Developed and Design by
                    <strong
                    ><a href="https://www.instagram.com/ramish_hassan_riaz/"
                    >Ramish Hassan Riaz</a
                    ></strong
                    ></span
                        >
                </div>
            </footer>
        `;
  }
}
customElements.define("website-footer", WebsiteFooter);

// Adding the Custom Cursor Configuration
new kursor({
  type: 1,
  removeDefaultCursor: true,
});

// Adding Animation Duration in the AOS Animation
AOS.init({
  offset: 350,
  delay: 0,
  duration: 1000,
});

// Quran Surah Tabs
$(document).ready(function () {
  var surahName = $(".surahName");
  $(surahName).next(".panel").hide();
  $(surahName).on("click", function () {
    $(this).next(".panel").stop(500).slideToggle();
    $(this).toggleClass("active");
  });
});

// Mail Form Functionality
function sendmail() {
  var name = $("#Name").val();
  var email = $("#Sender").val();
  var subject = $("#Subject").val();
  var message = $("#Message").val();

  var Body = `
            Name: ${name}
          <br />
            Email: ${email}
          <br />
            Subject: ${subject}
          <br />
            Message: ${message}
    `;

  Email.send({
    SecureToken: "fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
    To: "ramishscrapper@gmail.com",
    From: `${email}`,
    Subject: `New message on contact from: ${name}`,
    Body: Body,
  }).then((message) => {
    if (message == "OK") {
      alert("Your mail has been send. Thank you for connecting.");
    } else {
      alert("There is error at sending message. ");
    }
  });
}
