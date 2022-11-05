import { useCallback } from "react";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '40px'
  },
  title: {
    paddingRight: '10px',
  },
  button: {
    height: '20px',
  }
}

export const TodoItemComponent = ({ item, onItemRemove, onItemEdit }) => {
  const deleteHandler = useCallback(() => {
    onItemRemove(item.id)
  }, [item.id, onItemRemove]);

  const editHandler = useCallback(() => {
    onItemEdit(item);
  }, [item, onItemEdit]);

  return (
    <div style={styles.container}>
      <div style={styles.title}>{item.title}</div>
      <button style={styles.button} onClick={deleteHandler}>DELETE</button>
      <button style={styles.button} onClick={editHandler}>EDIT</button>
    </div>
  )
}
