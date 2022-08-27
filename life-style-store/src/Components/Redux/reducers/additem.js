const addItem = [];

export const addItemreducer = (store = addItem, { type, payload }) => {
  switch (type) {
    case "ADDITEM":
      return {...store,addItem: {payload}};
    
    case "DELITEM":
      return store = store.filter((e) => {
        return e.id !== payload.id;
      });
 
      default:
          return store
       
  }
};


