module.exports = {
	netlify: {
		description: "Netlify web sites",
		options: {
			frequency: 60 * 12, // 12 hours
			// if the sites don’t share assets on the same domain, we can reset
			// chrome with each run instead of each site in every run (it’s faster)
			freshChrome: "run"
		},
		urls: [
			"https://cloudfour.com/",
			"https://www.pwastats.com/",
			"https://www.responsivefieldday.com/",
		]
	},
};
