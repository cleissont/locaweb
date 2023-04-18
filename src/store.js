import { createStore } from "vuex"
import plans from "@/assets/data.json"

const store = createStore({
  state: {
    plans,
  },
})

export default store
