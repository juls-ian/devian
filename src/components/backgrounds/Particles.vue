<script setup>
const particlesLoaded = async (container) => {
  console.log('Particles container loaded', container);
};
</script>

<template>
  <div id="app">
    <!-- <vue-particles
        id="tsparticles"
        @particles-loaded="particlesLoaded"
        url="http://foo.bar/particles.json"
      /> -->

    <vue-particles
      id="tsparticles"
      @particles-loaded="particlesLoaded"
      :options="{
        background: {
          color: {
            // value: '#1f2937'
            value: 'transparent'
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            }
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#3b82f6'
          },
          links: {
            color: '#3b82f6',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: 'bounce',
            random: false,
            speed: 6,
            straight: false
          },
          number: {
            density: {
              enable: true
            },
            value: 10
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 5 }
          }
        },
        detectRetina: true
      }"
    />
  </div>
</template>
