export function request(path: string) {
  return fetch(`http://192.168.0.180:3000/${path}`)
}
