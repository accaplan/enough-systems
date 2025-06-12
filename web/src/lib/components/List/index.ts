import { ColumnType, OrderDirection } from "$lib/enums"
import type { ItemType } from "$lib/types"
import { writable, derived } from "svelte/store";

// - - - - - - -

export const columns = [
    {
        title: "Title",
        columnType: ColumnType.Title,
    },
    {
        title: "What",
        columnType: ColumnType.What,
    },
    {
        title: "With",
        columnType: ColumnType.With,
    },
    {
        title: "Where",
        columnType: ColumnType.Where,
    },
    {
        title: "When",
        columnType: ColumnType.When,
    },
]

export const SORTABLE_COLUMNS = [
    ColumnType.Title,
    ColumnType.What,
    ColumnType.With,
    ColumnType.Where,
    ColumnType.When,
]

export const FILTERABLE_COLUMNS = [
    ColumnType.What,
    ColumnType.With,
]

// - - - - - - -

export const baseList = writable([] as ItemType[])
export const orderColumn = writable(ColumnType.When)
export const orderDirection = writable(OrderDirection.Descending)
export const searchTerm = writable("")

// - - - - - - -

export const orderedList = derived(
    [baseList, orderColumn, orderDirection, searchTerm],
    ([$baseList, $orderColumn, $orderDirection, $searchTerm]) => {
        const lowerCaseSearchTerm = $searchTerm.toLowerCase();

        // Filtering
        let filteredList = $baseList.filter(item => {
            // Check if search term is included in any of the fields
            return (
                (item.title && item.title.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (item.what && item.what.some(w => w.toLowerCase().includes(lowerCaseSearchTerm))) ||
                (item.with && item.with.some(w => w.toLowerCase().includes(lowerCaseSearchTerm))) ||
                (item.where && item.where.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (item.when && item.when.toLowerCase().includes(lowerCaseSearchTerm))
            );
        });

        // Sorting
        filteredList.sort((a, b) => {
            let valueA, valueB;
            switch ($orderColumn) {
                case ColumnType.Title:
                    valueA = a.title || '';
                    valueB = b.title || '';
                    break;
                case ColumnType.What:
                    valueA = (a.what ?? []).join(', ') || '';
                    valueB = (b.what ?? []).join(', ') || '';
                    break;
                case ColumnType.With:
                    valueA = (a.with ?? []).join(', ') || '';
                    valueB = (b.with ?? []).join(', ') || '';
                    break;
                case ColumnType.Where:
                    valueA = a.where || '';
                    valueB = b.where || '';
                    break;
                case ColumnType.When:
                    valueA = a.date || '';
                    valueB = b.date || '';
                    break;
                // Add cases for other sortable columns if needed
                default:
                    valueA = a.date || '';
                    valueB = b.date || '';
            }

            if ($orderDirection === OrderDirection.Ascending) {
                return valueA.localeCompare(valueB);
            } else {
                return valueB.localeCompare(valueA);
            }
        });

        return filteredList;
    }
);