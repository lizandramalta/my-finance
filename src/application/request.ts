export async function get(path: string) {
  try {
    const response = await fetch(`http://192.168.0.180:3000/${path}`)
    const json = await response.json()
    return json
  } catch (error) {
    console.warn(error)
  }
}
