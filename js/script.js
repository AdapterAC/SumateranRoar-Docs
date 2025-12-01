function jumpTo(sectionId, roleTab = null) {
  const element = document.getElementById(sectionId);
  if (element) {
    const yOffset = -90;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  if (roleTab) {
    openTab(roleTab);
  }

  updateNavActiveState(sectionId, roleTab);
}

// Fungsi Ganti Tab
function openTab(roleName) {
  var i;
  var tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
    tabContent[i].classList.remove("active");
  }

  var tabBtn = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tabBtn.length; i++) {
    tabBtn[i].classList.remove("active-survivor");
    tabBtn[i].classList.remove("active-tiger");
  }

  document.getElementById(roleName).style.display = "block";
  setTimeout(() => {
    document.getElementById(roleName).classList.add("active");
  }, 10);

  if (roleName === "survivor") {
    document.getElementById("btn-survivor").classList.add("active-survivor");
  } else {
    document.getElementById("btn-tiger").classList.add("active-tiger");
  }
}

// Highlight Tombol Navigasi
function updateNavActiveState(sectionId, roleTab) {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => item.classList.remove("active"));

  if (sectionId === "start") navItems[0].classList.add("active");
  else if (sectionId === "endgame") navItems[3].classList.add("active");
  else if (sectionId === "gameplay" && roleTab === "survivor")
    navItems[1].classList.add("active");
  else if (sectionId === "gameplay" && roleTab === "tiger")
    navItems[2].classList.add("active");
}
