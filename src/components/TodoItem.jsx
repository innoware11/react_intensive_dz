import PropTypes from 'prop-types';
import Progress from './Progress';

TodoItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default function TodoItem({item, changed, removed}) {    

    return <Progress
                max={item.max}
                value={item.value}
                title={item.title}                
                changed={newVal => changed(newVal)}
                removed={removed}
            />
            
}