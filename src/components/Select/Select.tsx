import React, {useEffect, useState, KeyboardEvent} from "react";
import styles from "./Select.module.css"

type ItemType = {
  title: string
  value: any
}
type PropsType = {
  value: any
  onChangeItem: (value: any) => void
  items: ItemType[]
}

export const Select = (props: PropsType) => {
  const [active, setActive] = useState(false)
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

  const selectedItem = props.items.find(item => item.value === props.value)
  const hoveredItem = props.items.find(item => item.value === props.value)

  useEffect(() => {
    setHoveredElementValue(props.value)
  }, [props.value])

  const toggleItems = () => {
    setActive(!active)
  }
  const onClickItem = (itemValue: any) => {
    props.onChangeItem(itemValue)
    toggleItems()
  }
  const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      for (let index = 0; index < props.items.length; index++) {
        if (props.items[index].value === hoveredElementValue) {
          const pretendentElement = e.key === "ArrowDown"
              ? props.items[index+1]
              : props.items[index-1]
          if (pretendentElement) {
            props.onChangeItem(pretendentElement.value)
            return;
          }
        }
      }
      if (!selectedItem) {
        props.onChangeItem(props.items[0].value)
      }
    }
    if (e.key === "Escape" || e.key === "Enter") {
      setActive(false)
    }
  }

  return (
      <>

        {/*<select>
                <option value={""}>Coca Cola</option>
                <option>Sprite</option>
                <option>Fanta</option>
            </select>*/}

        <div className={styles.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
                <span className={styles.main}
                      onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
          {active &&
              <div className={styles.items}>
                {props.items.map(item =>
                    <div
                        onMouseEnter={() => setHoveredElementValue(item.value)}
                        key={item.value}
                        onClick={() => onClickItem(item.value)}
                        className={`${styles.item}
                                 ${hoveredElementValue === item.value ? styles.selected : ""}`}
                    >{item.title}</div>)}
              </div>
          }
        </div>
      </>
  )
}