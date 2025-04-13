import fetch from 'node-fetch'
import { promises as fs } from 'fs'
import { urlChistesMalos, VARIABLES_PLANTILLA } from './constants.js'

const obtenerChistesMalos = async () => {
  try {
    const response = await fetch(urlChistesMalos, {
      headers: { 'Content-Type': 'application/json' }
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    return data.chistes
  } catch (err) {
    console.error(err)
  }
}
const sortearChistes = (chistes = []) => {
  const randomIndex = Math.floor(Math.random() * chistes.length)
  const dato = chistes[randomIndex]
  return dato.chiste
}
;(async () => {
  try {
    const [plantilla, arrayDeChistesMalos] = await Promise.all([
      fs.readFile('./src/README.md.tpl', { encoding: 'utf-8' }),
      obtenerChistesMalos()
    ])

    const chisteAlAzar = sortearChistes(arrayDeChistesMalos)
    const readmeActualizado = plantilla.replace(
      VARIABLES_PLANTILLA.CHISTE,
      chisteAlAzar
    )

    await fs.writeFile('README.md', readmeActualizado)
    console.log(
      `✅ Se ha actualizado el chiste en el README.md\n${chisteAlAzar}`
    )
  } catch (error) {
    console.error('🛑 Hubo un errorcito jefe!', error)
  }
})()
