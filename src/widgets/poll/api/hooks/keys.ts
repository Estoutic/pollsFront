import { IPollType } from "../types"

const fontPackKeys = {
  all: (pollType: IPollType) => ['polls', pollType],
  byId: (id?: string) => ['polls-by-id', id],
}

export default fontPackKeys
