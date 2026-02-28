let mobile = false;
let nav_details = document.querySelectorAll("nav details");
function on_resize(init) {
	if (window.matchMedia("(max-width: 480px)").matches) {
		if (!init || mobile) return;
		mobile = true;
		nav_details.forEach((e) => { e.removeAttribute("open"); });
	} else {
		if (!mobile) return;
		mobile = false;
		nav_details.forEach((e) => { e.setAttribute("open", ""); });
	}
}
on_resize(true);

window.addEventListener('resize', () => on_resize());