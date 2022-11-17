import { CountriesList } from '../components/countries';
import { Navbar, Pagination, Selector, SideBar } from '../components/ui';


export const HomePage = () => {
    return (
        <div>
            <Navbar />

            <Selector />

            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <SideBar />
                <CountriesList />
            </div>

            <Pagination />
        </div>
    );
}
