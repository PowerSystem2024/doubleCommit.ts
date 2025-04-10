import fetch from 'node-fetch'
import { promises as fs } from 'fs'
import { chistesMalos, VARIABLES_PLANTILLA } from './constants.js'

const obtenerChistesMalos = async () => {
  try {
    const response = await fetch(chistesMalos, {
      headers: { 'Content-Type': 'application/json' }
    })
    if (!response.ok) {
      console.error('Error en la respuesta', response.statusText)
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
      VARIABLES_PLANTILLA.chiste,
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
