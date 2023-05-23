import MenuItem from "./MenuItem"

export default function Menu({menu, menuItem}) {
    return (
        <div style={menu}>
            <h3>Le Menu</h3>
            <ul style={{paddingLeft: 0}}>
                <MenuItem menuItem={menuItem} lable='Home'/>
                <MenuItem menuItem={menuItem} lable='About'/>
                <MenuItem menuItem={menuItem} lable='Stuff'/>
                <MenuItem menuItem={menuItem} lable='Things'/>
            </ul>
        </div>
        
    )
}