import { types } from "../../types/types"

describe('Test in Types', () => {

    test('Types should be load correctly', () => {

        expect(types).toEqual({
            uiFiltersContinents: '[ui] Filter Get Continents',
            uiFiltersActivities: '[ui] Filter Get Activities',
            uiCurrentPage: '[ui] Set Current Page',

            countriesLoaded: '[countries] Get Countries',
            countriesByName: '[countries] Get By Name',
            countriesById: '[countries] Get By Id',

            countriesSetFilterBy: '[countries] Set Active Filter By',
            countriesSetFilterContinent: '[countries] Set Active Filter By Continent',
            countriesSetFilterActivity: '[countries] Set Active Filter By Activity',
            countriesSearch: '[countries] Search a Country',
            countriesClearContryId: '[countries] Clear Country By Id',

            countriesFilterName: '[countries] Type Filter By Name',
            countriesFilterPop: '[countries] Type Filter By Population',

            activityGetAll: '[activities] Get all Activities',
            activityAddNew: '[activities] Create a New Activity',
            activityUpdate: '[activities] Update Activity',
            activityToUpdate: '[activities] Activity To Update',
            activityDelete: '[activities] Delete Activity',
        })
    })
})