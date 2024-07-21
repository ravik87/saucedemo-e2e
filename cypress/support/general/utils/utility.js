
// Provides general utility operations
class Utility {
    static getRandomItemInList(list) {
        return list[Math.floor(Math.random() * list.length)][0]
    }

    static getRandomSubsetOfList(list, count) {
        let final_list = []
        let random_item = null
        for (let i=0; i<count; i++) {
            list = this.getFilteredList(list, random_item)
            random_item = this.getRandomItemInList(list)
            final_list.push(random_item)
        }
        return final_list
    }

    static getFilteredList(list, filter_item) {
        if (filter_item == null) {
            return list
        }
        return list.filter(v => v !== filter_item)
    }
}

export default Utility