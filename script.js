const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 120;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add("active");
    }
  });
});
const channelName = "sanpears";

fetch(`https://img.shields.io/youtube/channel/subscribers/UC?style=social`)
  .then(() => {
    document.getElementById("subs").innerText = "YouTube • Live Subscribers";
  });

// REAL WORKING VERSION
fetch("https://api.allorigins.win/raw?url=https://www.googleapis.com/youtube/v3/channels?part=statistics&forHandle=@sanpears")
  .then(res => res.json())
  .then(data => {
    const subs = data.items[0].statistics.subscriberCount;
    document.getElementById("subs").innerText =
      Number(subs).toLocaleString() + " SUBSCRIBERS";
  })
  .catch(() => {
    document.getElementById("subs").innerText = "Subscribe on YouTube";
  });
const sub = document.getElementById("subNumber");
let target = parseInt(sub.innerText.replace(/\D/g, ""));
let count = 0;

let interval = setInterval(() => {
  count += Math.ceil(target / 40);
  if (count >= target) {
    sub.innerText = target.toLocaleString();
    clearInterval(interval);
  } else {
    sub.innerText = count.toLocaleString();
  }
}, 30);
<script>
particlesJS("particles-js", {
  particles: {
    number: {
      value: 45,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#00f6ff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.2,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#00f6ff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.2
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  },
  retina_detect: true
});
</script>
