document.getElementById("themeSwitcho").addEventListener("click",()=>{
    if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
        document.documentElement.setAttribute("data-bs-theme","light")
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
    }
})

window.customElements.define(
    "header-component",
    class extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
            <meta property="og:url" content="jorge-felix.com">
            <meta property="og:type" content="website">
            <meta property="og:title" content="Jorge Felix Portfolio">
            <meta property="og:description" content="Jorge Felix | Front End Web Developer Portfolio | Seeking Opportunities">
            <meta property="og:image" content="https://jorge-felix.com/assets/headshot-medium.jpg">
            <meta property="og:image:width" content="630" />
            <meta property="og:image:height" content="630" />
        
            <meta name="twitter:card" content="summary_large_image">
            <meta property="twitter:domain" content="jorge-felix.com">
            <meta property="twitter:url" content="jorge-felix.com">
            <meta name="twitter:title" content="Jorge Felix Portfolio">
            <meta name="twitter:description" content="Jorge Felix | Front End Web Developer Portfolio | Seeking Opportunities">
            <meta name="twitter:image" content="https://jorge-felix.com/assets/headshot-medium.jpg">
        
            <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png">
            <link rel="manifest" href="icons/site.webmanifest">
            <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#5bbad5">
            <link rel="shortcut icon" href="icons/favicon.ico">
            <meta name="msapplication-TileColor" content="#da532c">
            <meta name="msapplication-config" content="icons/browserconfig.xml">
            <meta name="theme-color" content="#ffffff">
            `;
        }
    }
)

window.customElements.define(
    "navbar-component",
    class extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">Jorge Felix</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                            <!-- <li class="nav-item">
                                <a class="nav-link" href="https://profile.indeed.com/p/jorgef-7n03x99"
                                    aria-label="Resume on Indeed.com - link opens in a new tab">Resume <i
                                        class="bi bi-box-arrow-up-right" role="none"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.linkedin.com/in/jorge-felix/"
                                    aria-label="LinkedIn Profile - link opens in a new tab">LinkedIn <i
                                        class="bi bi-box-arrow-up-right" role="none"></i></a>
                            </li> -->
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
                                    Profiles
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="https://profile.indeed.com/p/jorgef-7n03x99" aria-label="External link to my resume on Indeed">Resume <i
                                        class="bi bi-box-arrow-up-right" role="none"></i></a></li>
                                    <li><a class="dropdown-item" href="https://www.linkedin.com/in/jorge-felix/" aria-label="External link to my profile on LinkedIn">LinkedIn <i
                                        class="bi bi-box-arrow-up-right" role="none"></i></a></li>
                                    <li><a class="dropdown-item" href="https://github.com/jfelix9" aria-label="External link to my profile on GitHub">GitHub <i
                                        class="bi bi-box-arrow-up-right" role="none"></i></a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
                                    Projects
                                </a>
                                <ul class="dropdown-menu">
                                    <!-- <li><a class="dropdown-item" href="iosappprojects.html">iOS App Development</a></li> -->
                                    <li><a class="dropdown-item" href="webdevprojects.html">Web Development</a></li>
                                    <li><a class="dropdown-item" href="otherprojects.html">Other Skills</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
         `;
        }
    }
);

window.customElements.define(
    "footer-component",
    class extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
                <footer class="py-1 my-1">
                    <ul class="nav justify-content-center border-bottom py-1 mb-1">
                        <li class="nav-item"><a href="index.html" class="nav-link px-2 text-body-secondary">Home</a></li>
                    </ul>
                    <ul class="nav justify-content-center border-bottom py-2 mb-1">
                        <!-- <li class="nav-item"><a href="iosappprojects.html" class="nav-link px-3 text-body-secondary">iOS</a></li> -->
                        <li class="nav-item"><a href="webdevprojects.html" class="nav-link px-3 text-body-secondary">Web</a></li>
                        <li class="nav-item"><a href="otherprojects.html" class="nav-link px-3 text-body-secondary">Other</a></li>
                    </ul>
                    <ul class="nav justify-content-center border-bottom py-2 mb-1">
                        <li class="nav-item"><a href="https://profile.indeed.com/p/jorgef-7n03x99" class="nav-link px-3 text-body-secondary" aria-label="Resume on Indeed.com - link opens in a new tab">Resume <i class="bi bi-box-arrow-up-right" role="none"></i></a></li>
                        <li class="nav-item"><a href="https://www.linkedin.com/in/jorge-felix/" class="nav-link px-3 text-body-secondary" aria-label="LinkedIn Profile - link opens in a new tab">LinkedIn <i class="bi bi-box-arrow-up-right" role="none"></i></a></li>
                        <li class="nav-item"><a href="https://github.com/jfelix9" class="nav-link px-3 text-body-secondary" aria-label="GitHub Profile - link opens in a new tab">GitHub <i class="bi bi-box-arrow-up-right" role="none"></i></a></li>
                    </ul>
                    <p class="text-center text-body-secondary py-2"><i class="bi bi-geo-alt" role="none"></i> Austin, Texas</p>
                </footer>
            `;
        }
    }
);