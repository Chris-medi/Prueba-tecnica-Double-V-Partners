import { requestSearchNameA } from "../../api/global";
import DisplayLayout from "./component/displayLayout";


export default async function Index() {
  let list_items:any[]
  try {
    const { items } = await requestSearchNameA('Chriss');
    list_items = items
  } catch (error) {
    list_items = []
  }
  return (
    <section className="m-4">
    <h1 className="text-lx m-4 text-center">Ve y busca una persona en GitHub</h1>
      <DisplayLayout initial_items={list_items} />
    </section>
  )
}
