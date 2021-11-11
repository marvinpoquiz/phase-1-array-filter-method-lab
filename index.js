function findMatching(drivers, item) {
    return drivers.filter(function (driver) { 
        return driver.toLowerCase() === item.toLowerCase() 
    })
  }
  
  function fuzzyMatch(drivers, item) {
    return drivers.filter(function (driver) { 
        return driver.toLowerCase().substring(0, item.length) === item.toLowerCase() 
    })
  }
  
  function matchName(drivers, name) {
    return drivers.filter(function (driver) { 
        return driver.name === name })
  }
  