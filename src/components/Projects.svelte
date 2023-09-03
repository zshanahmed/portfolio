<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";

  import "swiper/css/pagination";
  import "swiper/css/navigation";
  // import required modules
  import { Autoplay, Pagination, Navigation } from "swiper";
  import { projects } from "../data/projects";
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
            <div class="row flex-column flex-md-row">
              <div class="col">
                <img src={project.img} alt={project.alt} />
              </div>
              <div class="col p-3 project-content">
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
                    href={project.github}>Code</a
                  >
                  {#if project.app}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      class="btn--primary"
                      href={project.app}>App</a
                    >
                  {/if}
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
