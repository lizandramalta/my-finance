import { FixedReleases } from './types'

const domain = 'http://192.168.0.180:3000'

export async function get(path: string) {
  try {
    const response = await fetch(`${domain}/${path}`)
    const json = await response.json()
    return json
  } catch (error) {
    console.warn(error)
  }
}

export async function post(path: string, body: FixedReleases) {
  try {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
    const response = await fetch(`${domain}/${path}`, settings)
    const json = await response.json()
    return json
  } catch (error) {
    console.warn(error)
  }
}
