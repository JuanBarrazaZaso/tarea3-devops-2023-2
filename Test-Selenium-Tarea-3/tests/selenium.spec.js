// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('selenium', function() {
  this.timeout(300000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Agrega2Directores', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1052, height: 808 })
    await driver.wait(until.elementLocated(By.id(":r1:-tab-1")), 10000);
    await driver.findElement(By.id(":r1:-tab-1")).click()
    
    // * Agrega primer director
    await driver.findElement(By.css("#add-director-btn > .flex")).click()    
    await driver.findElement(By.id("name")).click()
    await driver.findElement(By.id("name")).sendKeys("Director 1")
    await driver.findElement(By.css(".h-min > .flex")).click()

    // * Agrega segundo director
    await driver.findElement(By.css("#add-director-btn > .flex")).click()    
    await driver.findElement(By.id("name")).click()
    await driver.findElement(By.id("name")).sendKeys("Director 2")
    await driver.findElement(By.css(".h-min > .flex")).click()
   
  })
  it('Agregar2PeliculasAlDirectorCristopherNolan', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1054, height: 810 })

    // * Agrega una pelicula a director Cristopher Nolan
    await driver.findElement(By.css("#add-movie-btn > .flex")).click()
    await driver.findElement(By.id("title")).click()
    await driver.findElement(By.id("title")).sendKeys("Pelicula 1 al director Cristopher Nolan")
    await driver.findElement(By.id("description")).sendKeys("pelicula 1 al director cristopher nolan ")
    await driver.findElement(By.id("year")).click()
    await driver.findElement(By.id("year")).sendKeys("2022")
    await driver.findElement(By.id("director_id")).click()
    {
      const dropdown = await driver.findElement(By.id("director_id"))
      await dropdown.findElement(By.xpath("//option[. = 'Cristopher Nolan']")).click()
    }
    await driver.findElement(By.css(".h-min > .flex")).click()

    // * agrega segunda pelicula a director Cristopher Nolan
    await driver.findElement(By.css("#add-movie-btn > .flex")).click()
    await driver.findElement(By.id("title")).click()
    await driver.findElement(By.id("title")).sendKeys("Pelicula 2 al director Cristopher Nolan")
    await driver.findElement(By.id("description")).sendKeys("pelicula 2 al director cristopher nolan")
    await driver.findElement(By.id("year")).click()
    await driver.findElement(By.id("year")).sendKeys("2022")
    await driver.findElement(By.id("director_id")).click()
    {
      const dropdown = await driver.findElement(By.id("director_id"))
      await dropdown.findElement(By.xpath("//option[. = 'Cristopher Nolan']")).click()
    }
    await driver.findElement(By.css(".h-min > .flex")).click()


  })
  it('AgregarPeliculaParaCadaDirector', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1054, height: 810 })
    
    // * Agregando a director Cristopher Nolan
    await driver.findElement(By.css("#add-movie-btn > .flex")).click()
    await driver.findElement(By.id("title")).click()
    await driver.findElement(By.id("title")).sendKeys("Pelicula de Cristopher Nolan")
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("Esta pelicula es de Cristopher Nolan")
    await driver.findElement(By.id("year")).click()
    await driver.findElement(By.id("year")).sendKeys("2022")
    await driver.findElement(By.id("director_id")).click()
    {
      const dropdown = await driver.findElement(By.id("director_id"))
      await dropdown.findElement(By.xpath("//option[. = 'Cristopher Nolan']")).click()
    }
    await driver.findElement(By.css(".h-min > .flex")).click()

    // * Agregando a Director Greta Gerwig
    await driver.findElement(By.css("#add-movie-btn > .flex")).click()
    await driver.findElement(By.id("title")).click()
    await driver.findElement(By.id("title")).sendKeys("Pelicula de Greta Gerwig")
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("Esta pelicula es de Greta Gerwig")
    await driver.findElement(By.id("year")).click()
    await driver.findElement(By.id("year")).sendKeys("2020")
    await driver.findElement(By.id("director_id")).click()
    {
      const dropdown = await driver.findElement(By.id("director_id"))
      await dropdown.findElement(By.xpath("//option[. = 'Greta Gerwig']")).click()
    }
    await driver.findElement(By.css(".h-min > .flex")).click()


  })
})