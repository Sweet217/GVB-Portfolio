<script>
import "./styles/app.css";
import PhotoComponent from "./components/PhotoComponent.vue";

export default {
  name: "Mainpage",
  components: {
    PhotoComponent,
  },
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<template>
  <div class="banner-1">
    <!-- NavBar -->
    <nav class="container px-6 mx-auto md:flex md:justify-between md:items-center mb-5">
      <div class="flex items-center justify-between">
        <div class="relative w-16 h-16">
          <img
            class="rounded-full border border-gray-100 shadow-sm"
            src="./assets/1688841381967.jpeg"
            alt="user image"
          />
        </div>

        <div class="flex justify-center space-x-4 mt-4 m-5">
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/gabriel-velazquez-berrueta-53a3b925a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              class="w-6 h-6"
            />
          </a>
          <!-- Instagram -->
          <a
            href="https://www.instagram.com/_gabriel.vb/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              class="w-6 h-6"
            />
          </a>
          <!-- GitHub -->
          <a
            href="https://github.com/Sweet217?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              class="w-6 h-6"
            />
          </a>
        </div>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="menu-button"><a href="#">Home</a></li>
        <li class="menu-button"><a href="#education" v-smooth-scroll>Education</a></li>
        <li class="menu-button"><a href="#experience" v-smooth-scroll>Experience</a></li>
        <li class="menu-button"><a href="#work" v-smooth-scroll>Projects</a></li>
        <li class="menu-button">
          <a href="#volunteering" v-smooth-scroll>Volunteering</a>
        </li>
        <li class="menu-button"><a href="#about" v-smooth-scroll>About</a></li>
      </ul>
    </nav>
    <!-- End Navbar -->

    <div class="flex items-center">
      <div class="w-11/12 space-y-5 md:space-y-3">
        <h3
          class="hello-button text-gray-700 w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-work_sans"
        >
          👋 Hello,
        </h3>
        <h1
          class="3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-Eczar font-bold leading-tight text-gray-700"
        >
          I'm
          <a
            href="https://www.linkedin.com/in/gabriel-velazquez-berrueta-53a3b925a/"
            target="_blank"
            class="text-black hover:underline"
            >Gabriel Velazquez Berrueta</a
          >🦭<br />Software Engineer Student & Developer
        </h1>

        <div class="flex flex-col md:flex-row gap-2 md:gap-4">
          <a href="https://github.com/Sweet217" target="_blank" rel="noopener noreferrer">
            <button class="text-white submit-button md:mb-0 bg-gray-800">
              View My Projects
            </button>
          </a>
          <a
            href="mailto:ingenierogvb@gmail.com"
            class="border-gray-800 submit-button text-center mb-2"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div class="w-8/12 flex justify-center mt-20">
        <img
          src="./assets/image-removebg-preview (1).png"
          style="height: auto; width: auto; max-width: auto"
        />
      </div>
    </div>
  </div>
  <div class="banner-3 container">
    <!-- Education Banner -->
    <div class="space-y-5 py-8 px-8 md:py-16 md:px-20">
      <h3 class="heading4 my-5">Education</h3>
      <div class="flex flex-wrap gap-5 justify-center">
        <!-- Education Card 1 -->
        <div class="card w-full md:w-1/2 lg:w-1/3 border-primary shadow-lg">
          <div class="space-y-5 py-8 px-8">
            <h4 class="project-title item">
              Bachelor of Science in Software Engineering
            </h4>
            <h5 class="text-lg">(In progress)</h5>
            <p class="font-work_sans pr-12">
              A four-year degree focusing on software development, programming languages,
              and system architecture in Universidad de Colima.
            </p>
            <a
              href="https://www.linkedin.com/in/gabriel-velazquez-berrueta-53a3b925a/?profileId=ACoAAD_Gfr4ByADopT9UPUNyUaVELd0BX3Jh77A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="text-sky-800 font-bold text-2xl tracking-wider">
                Learn More
              </button>
            </a>
          </div>
        </div>

        <!-- Education Card 2 -->
        <div class="card w-full md:w-1/2 lg:w-1/3 border-primary shadow-lg">
          <div class="space-y-5 py-8 px-8">
            <h4 class="project-title item">
              College Certificate in Artificial Intelligence
            </h4>
            <h5 class="text-lg">Completed</h5>
            <p class="font-work_sans pr-12">
              Graduate program specializing in AI techniques, machine learning, and deep
              learning applications in Centennial College.
            </p>
            <p></p>
            <a
              href="https://www.linkedin.com/in/gabriel-velazquez-berrueta-53a3b925a/overlay/1733882770069/single-media-viewer/?profileId=ACoAAD_Gfr4ByADopT9UPUNyUaVELd0BX3Jh77A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="text-sky-800 font-bold text-2xl tracking-wider">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience Banner -->
    <div class="space-y-5 py-8 px-8 md:py-16 md:px-20">
      <h3 class="heading4 my-5">Experience</h3>
      <div class="flex flex-wrap gap-5 justify-center">
        <!-- Experience Card 1 -->
        <div class="card w-full md:w-1/2 lg:w-1/3 border-secondary shadow-lg">
          <div class="space-y-5 py-8 px-8">
            <h4 class="project-title item">Fullstack Developer</h4>
            <h5 class="text-2xl font-bold">SOLYTEC</h5>
            <h6 class="text-xl">Part Time</h6>
            <p class="font-work_sans pr-12">
              Worked on developing web applications using Vue.js and Laravel, focusing on
              API integrations and frontend features. Also use Python. Builded webpages,
              web systems,single application pages, prototypes, Rest-apis, designed
              databases, Builded databases, desktop applications with python, testing,
              etc.
            </p>
            <!-- <a href="#" target="_blank" rel="noopener noreferrer">
              <button class="text-sky-800 font-bold text-2xl tracking-wider">
                View Project
              </button>
            </a> -->
          </div>
        </div>

        <!-- Experience Card 2 -->
        <div class="card w-full md:w-1/2 lg:w-1/3 border-secondary shadow-lg">
          <div class="space-y-5 py-8 px-8">
            <h4 class="project-title item">Prompt Engineer</h4>
            <h5 class="text-2xl font-bold">Socius AI</h5>
            <h6 class="text-xl">Freelance</h6>
            <p class="font-work_sans pr-12">
              I undertook the task of automating the call review process to evaluate
              compliance with specific criteria. This project involved the development of
              custom prompts and scripts to streamline the assessment of phone
              conversations, thereby improving efficiency and accuracy in the evaluation
              process.
            </p>
            <!-- <a href="#" target="_blank" rel="noopener noreferrer">
              <button class="text-sky-800 font-bold text-2xl tracking-wider"></button>
            </a> -->
          </div>
        </div>

        <!-- Experience Card 3 -->
        <div class="card w-full md:w-1/2 lg:w-1/3 border-secondary shadow-lg">
          <div class="space-y-5 py-8 px-8">
            <h4 class="project-title item">Prompt Engineer</h4>
            <h5 class="text-2xl font-bold">Scalatowers</h5>
            <h6 class="text-xl">Freelance</h6>
            <p class="font-work_sans pr-12">
              Developed different prompts for the company AI with the purpose of
              developing AI Agents for different companies & Automation of workflows with
              JAVA Scripts
            </p>
            <!-- <a href="#" target="_blank" rel="noopener noreferrer">
              <button class="text-sky-800 font-bold text-2xl tracking-wider">
                View Freelance Work
              </button>
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="banner-2 space-y-10 pb-20" id="work">
    <h3 class="heading3 my-5">Highlighted Projects</h3>

    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">SEALSYSTEM Web App For Dynamic Reproduction of Media (Non published)</h4>
        <p class="font-work_sans pr-12">
          Developed a dynamic web app for media management, leveraging Vue and Laravel for
          seamless frontend-backend integration, with MySQL for database design.
        </p>
        <a href="https://github.com/Sweet217/SEALSYSTEM/tree/master" target="_blank" rel="noopener noreferrer">
          <button class="text-sky-800 font-bold text-2xl tracking-wider">
            View Project
          </button>
        </a>
      </div>
      <div class="card-image md:w-1/2 flex items-center justify-center">
        <img
          class="object-contain max-h-40 md:max-h-60 rounded-2xl mb-5"
          src="./assets/Screenshot 2025-04-22 at 11.53.22 a.m..png"
        />
      </div>
    </div>

    <div class="card">
      <div class="card-image md:w-1/2 flex items-center justify-center">
        <img
          class="rounded-2xl object-contain max-h-40 md:max-h-60 mt-5"
          src="./assets/Solytec-PD-1-150x150.png"
        />
      </div>
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">SEALSYSTEM ads Player</h4>
        <p class="font-work_sans pr-12">
          An app that let you register devices with licenses generated in the web app, as
          well as reproducing the multimedia from the lists created in the web app, App
          created using Python.
        </p>
      </div>
    </div>

    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">DERMA-PRO</h4>
        <p class="font-work_sans pr-12">
          A machine learning app that compares skin data to detect potential melanoma.
          (This project is for learning purposes.)
        </p>
        <a
          href="https://github.com/Sweet217/dermapro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="text-sky-800 font-bold text-2xl tracking-wider">
            View Project
          </button>
        </a>
      </div>
      <div class="card-image md:w-1/2 flex items-center justify-center">
        <img
          class="rounded-2xl object-contain max-h-40 md:max-h-60 mb-5"
          src="./assets/dermapro.png"
        />
      </div>
    </div>

    <div class="card">
      <div class="card-image md:w-1/2 flex-col items-center justify-center">
        <img
          class="rounded-2xl object-contain max-h-40 md:max-h-60 mt-5"
          src="./assets/hackaton.jpeg"
        />
        <img
          class="rounded-2xl object-contain max-h-40 md:max-h-60 mt-5"
          src="./assets/allergies index.png"
        />
      </div>
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">VIMTACH Hackaton Project</h4>
        <p class="font-work_sans pr-12">
          Secured 2nd place in a hackathon simulating a virtual clinic environment where
          users acted as doctors to diagnose diseases and prescribe treatments for virtual
          patients. Contributed as the backend and API developer, focusing on Flask/Python
          for building robust APIs and integrating prompt engineering techniques.
          Leveraged advanced AI tools like o1-mini, Whisper TTS-1, and meta-prompt
          engineering to enable real-time data retrieval, reasoning, and external tool
          integration. Collaborated with a teammate who developed the React frontend.
          Additionally, implemented a custom API to securely save medical records as
          metadata on a Pinecone vector database, demonstrating innovative use of AI and
          backend systems for healthcare simulations. On github I only have the APIs for
          Pinecone, Prompts, and a test of multi LLMS.
        </p>
        <a
          href="https://github.com/Sweet217/HACKATON-VIMTECH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="text-sky-800 font-bold text-2xl tracking-wider">
            View Backend
          </button>
        </a>
      </div>
    </div>
  </div>

  <div class="banner-4 space-y-10 pb-20 bg-opacity-50" id="volunteering">
    <h3 class="heading3 my-5">Volunteering</h3>

    <div class="card">
      <!-- Image Section -->
      <div class="card-image md:w-1/2 flex items-center justify-center">
        <img
          class="rounded-2xl object-contain max-h-40 md:max-h-60"
          src="./assets/LevelBeta.png"
        />
      </div>

      <!-- Content Section -->
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">Microsoft Student Ambassador</h4>
        <h1 class="font-work_sans pr-16 text-xl">Rank: Beta</h1>
        <p class="font-work_sans pr-12">
          Student Ambassadors are a global group of campus leaders who are eager to help
          fellow students, create robust tech communities and develop technical and career
          skills for the future.
        </p>
        <a
          href="https://mvp.microsoft.com/studentambassadors/certificate/904821f4-e63a-45c8-a413-6996a40c8893"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="text-sky-800 font-bold text-2xl tracking-wider">
            View Certificate
          </button>
        </a>
      </div>
    </div>
  </div>

  <div class="banner-4 pb-5" id="about">
    <h3 class="heading3 my-5">About Me</h3>
    <div class="space-y-0 mt-5 md:mt-0 pb-5">
      <div class="flex items-center justify-between">
        <p class="font-work_sans text-gray-800 leading-loose max-w-xs text-left">
          I'm a motivated software engineering student at Universidad de Colima with a
          passion for full-stack development and AI prompt engineering.
        </p>
        <div class="flex justify-center items-center mx-4">
          <PhotoComponent class="pb-5 hidden md:hidden lg:block"></PhotoComponent>
        </div>
        <p class="font-work_sans text-gray-800 leading-loose max-w-xs text-right">
          I have over 1 year of experience in building web and desktop applications,
          emphasizing user-centered design and functionality & Over 2 years of experience using LLMS and building apis that uses them for different focus and solutions.
        </p>
      </div>
    </div>
  </div>
</template>
