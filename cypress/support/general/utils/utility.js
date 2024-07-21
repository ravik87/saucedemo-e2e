
// Provides general utility operations
class Utility {
    static getRandomItemInList(list) {
        return list[Math.floor(Math.random() * list.length)][0]
    }

    static getRandomSubsetOfList(list, count) {
        let final_list = []
        let random_item = null
        let filtered_list = this.getFilteredList(list, random_item)
        for (let i=0; i<count; i++) {
            random_item = this.getRandomItemInList(filtered_list)
            filtered_list = this.getFilteredList(filtered_list, random_item)
            final_list.push(random_item)
        }
        return final_list
    }

    static getFilteredList(list, filter_item) {
        if (filter_item == null) {
            return list
        }

        return list.filter(v =>
            v.toString().replaceAll(" ", "").toLowerCase() !==
            filter_item.toString().replaceAll(" ", "").toLowerCase());
    }
}

export default Utility