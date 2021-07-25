const formatDate = (date) => {
	const dd = new Date(date)
	let diff = new Date() - dd;

	let sec = Math.floor(diff / 1000);

	if (sec < 60) {
		return sec + ' сек. назад';
	}

	let min = Math.floor(diff / 60000);
	if (min < 60) {
		return min + ' мин. назад';
	}

	let d = dd;
	d = [
		'0' + d.getDate(),
		'0' + (d.getMonth() + 1)
	].map(component => component.slice(-2));

	return d.slice(0, 3).join('.') + '.' + dd.getFullYear();
}

export default formatDate