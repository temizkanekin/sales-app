module.exports = {
  ci: {
    collect: {
      url: [
        "https://festive-lumiere-02399a.netlify.app/",
        "https://festive-lumiere-02399a.netlify.app/salesmarket",
        "https://festive-lumiere-02399a.netlify.app/salesmarket/20533391"
      ],
      numberOfRuns: 2
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};