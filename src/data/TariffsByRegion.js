const TariffsByRegion = {
  //
  "_A - Eastern": {
    previous: {
      credit: {
        elec: {
          oneRate: 0.13587,
          twoRate: {
            day: 0,
            night: 0
          },
          standing: 0.20444
        },
        gas: 0.03371,
        standing: 0.20444
      },
      prepay: {
        elec: {
          oneRate: 0.13587,
          twoRate: {
            day: 0,
            night: 0
          },
          standing: 0.2044
        },
        gas: 0.033705,
        standing: 0.2044
      },
    },
    current: {
      credit: {
        elec: {
          oneRate: 0.14255,
          twoRate: {
            day: 0,
            night: 0
          },
          standing: 0.20558
        },
        gas: 0.02725,
        standing: 0.20444
      },
      prepay: {
        elec: {
          oneRate: 0.13587,
          twoRate: {
            day: 0,
            night: 0
          },
          standing: 0.2044
        },
        gas: 0.033705,
        standing: 0.2044
      },
    }
  },
  //
  "_B - East Midlands": {
    previous: {
      credit: {
        elec: {
          oneRate: 0.132615,
          twoRate: {
            day: 0,
            night: 0
          },
          standing: 0.20444
        },
        gas: 0.033453,
        standing: 0.20444
      },
      prepay: {
        elec: {
          oneRate: 0.13587,
          twoRate: {
            day: 0,
            night: 0
          },
          standing: 0.2044
        },
        gas: 0.033705,
        standing: 0.2044
      },
    },
    current: {
      credit: {
        elec: {
          oneRate: 0.13986,
          twoRate: {
            day: 0,
            night: 0
          },
          standing: 0.18993
        },
        gas: 0.02737,
        standing: 0.20444
      },
      prepay: {
        elec: {
          oneRate: 0.13587,
          twoRate: {
            day: 0,
            night: 0
          },
          standing: 0.2044
        },
        gas: 0.033705,
        standing: 0.2044
      },
    }
  },
  //
  "_C - London": {
    previous: {
      credit: {
        elec: {
          oneRate: 0.130095,
          twoRate: {
            day: 0,
            night: 0
          },
          standing: 0.20444
        },
        gas: 0.036782,
        standing: 0.20444
      },
      prepay: {
        elec: {
          oneRate: 0.13587,
          twoRate: {
            day: 0,
            night: 0
          },
          standing: 0.2044
        },
        gas: 0.033705,
        standing: 0.2044
      },
    },
    current: {
      credit: {
        elec: {
          oneRate: 0.13986,
          twoRate: {
            day: 0,
            night: 0
          },
          standing: 0.18993
        },
        gas: 0.02737,
        standing: 0.20444
      },
      prepay: {
        elec: {
          oneRate: 0.13587,
          twoRate: {
            day: 0,
            night: 0
          },
          standing: 0.2044
        },
        gas: 0.033705,
        standing: 0.2044
      },
    },
  },
  //
  "_D - Merseyside and North Wales": {
    elec: 0.14154,
    gas: 0.03696,
  },
  //
  "_E - Midlands": {
    elec: 0.136395,
    gas: 0.036015,
  },
  //
  "_F - Northern": {
    elec: 0.13713,
    gas: 0.034996,
  },
  //
  "_G - North Western": {
    elec: 0.134295,
    gas: 0.035301,
  },
  //
  "_H - Southern": {
    elec: 0.135555,
    gas: 0.03633,
  },
  //
  "_J - South Eastern": {
    elec: 0.139755,
    gas: 0.03612,
  },
  //
  "_K - South Wales": {
    elec: 0.143115,
    gas: 0.03528,
  },
  //
  "_L - South Western": {
    elec: 0.145005,
    gas: 0.037649,
  },
  //
  "_M - Yorkshire": {
    elec: 0.1323,
    gas: 0.034178,
  },
  //
  "_N - South Scotland": {
    elec: 0.13503,
    gas: 0.03423,
  },
  //
  "_P - North Scotland": {
    elec: 0.145425,
    gas: 0.033705,
  },
  "Not mainland": {
    elec: 0.0000,
    gas: 0.0000,
  }
}

export default TariffsByRegion