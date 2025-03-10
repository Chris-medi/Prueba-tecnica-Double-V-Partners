import type { Item, Response } from "../interfaces/global"

const URLS = {
  search_api: (name:string) => `https://api.github.com/search/users?q=${name}`
}

export async function requestSearchNameA(name:string): Promise<Response<Item>> {
  const res = await fetch(URLS.search_api(name))
  return await res.json()
}

export async function requestSearchNameS(name:string): Promise<any> {
  return fetch(URLS.search_api(name))
}