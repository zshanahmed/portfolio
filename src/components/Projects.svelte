<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";

  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import sap from "../images/sap.png";
  import chat_hq from "../images/chat_hq.png";
  // import required modules
  import { Autoplay, Pagination, Navigation } from "swiper";

  export const projects = [
    {
      title: "Science Alliance Portal",
      description:
        "Web-app to facilitate Iowa Bioscience Academy to help them manage data of Science Alliance Members and administer them. I worked on Dashboard, Calendar, Login Page and overall Front-end UI.",
      skills: ["Django", "HTML/CSS", "Bootstrap", "MS Azure"],
      img: sap,
      alt: "Monitor screen showing mockup of science alliance portal",
    },
    {
      title: "Chat HQ",
      description:
        "Online chat application running on top of chatengine.io API to provide an interactive user experience to users. Users can login to start chatting or signup to create a new account. Users can also send images to other users in the thread and see who's online right now.",
      skills: ["React", "chatengine.io"],
      img: chat_hq,
      alt: "Monitor screen showing mockup of chat hq",
    },
  ];
</script>

<section class="resume-section" id="projects">
  <div class="resume-section-content">
    <h2 class="mb-2">Projects</h2>
    <Swiper
      navigation={true}
      modules={[Autoplay, Navigation, Pagination]}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      class="mySwiper"
    >
      {#each projects as project}
        <SwiperSlide>
          <div class="h-100">
            <h3>{project.title}</h3>
            <div class="row">
              <div class="col-6 col-sm-6">
                <img src={project.img} alt={project.alt} />
              </div>
              <div class="col-6 p-3 project-content">
                {project.description}
                <div class="mt-3">
                  <h4>Technologies Used</h4>
                  <ul>
                    {#each project.skills as skill}
                      <li class="skills">{skill}</li>
                    {/each}
                  </ul>
                </div>
                <div class="text-center mt-5">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    class="btn--primary"
                    href="https://github.com/zshanahmed/SAP">Code</a
                  >
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      {/each}
    </Swiper>
  </div>
  <a class="down-arrow" href="#experience">
    <span class="fa-stack">
      <i class="fa-solid fa-circle fa-stack-2x" />
      <i class="fa-solid fa-stack-1x fa-arrow-down fa-inverse" />
    </span></a
  >
</section>

<style>
  .skills {
    color: #fff;
    padding: 0.3em 0.8em;
    border-radius: 1em;
    background-color: hsl(0 0% 30%);
  }

  ul {
    padding: 0;
  }

  ul > li {
    list-style-type: none;
    display: inline-block;
    margin-right: 0.2em;
    color: #fff;
    padding: 0.3em 0.8em;
    border-radius: 1em;
    background-color: hsl(272, 30%, 44%);
  }
</style>
