const EventHandler = (() => {
    const events = {}
    return {
      subscribe: (type, listner) => {
        events[type] = events[type] || [];
          events[type].push(listner);
      },
      publish: (type, value) => {
        if(events[type]){
          events[type].forEach( types => types(value) )
        }
      }
    }
})()

export default EventHandler;
