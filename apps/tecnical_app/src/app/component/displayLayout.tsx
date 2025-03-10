'use client'

import { useEffect } from "react"

import { useItemStore } from "../../../state/global"
import { requestSearchNameS } from "../../../api/global"
import type { Item } from "../../../interfaces/global"

import InputComponent from "./input"
import UserComponent from "./user"

export default function ({ initial_items }:{initial_items: Item[] | []}) {

  const items = useItemStore((state) => state.items)
  const setItems = useItemStore((state) => state.setItems)
  useEffect(() => {
    setItems(initial_items)
  }, [setItems, initial_items])

   function searchName(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get("name") as string
    requestSearchNameS(name).then(res => res.json()).then(({items}) =>{
      setItems(items)
    })
  }

  return (
    <section>
    <InputComponent searchName={searchName}/>
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center text-center lg:grid-cols-4 xl:grid-cols-5">
      {items?.length > 0 ?(
        items.map((item: Item) => (
          <UserComponent key={item.login} avatar_url={item.avatar_url} login={item.login} />))
        ) : (
          <p className="text-3xl place-items-center text-center col-span-full mt-8">No se encontro ningun usuario</p>
        )}
    </div>

    </section>
  )
}