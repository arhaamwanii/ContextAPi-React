PROP DRILLING
    - you have to pass the data through many layers which is ofc a problim and leads to boilerplate code

CONTEXT API 
    - we can make a context which will be available in all the app 
    - then we can connect and state to it and have it avilable in rest of the app

    - store: folder
    - data or state store

    - "createCotext" creates a react obeject 

    - so we then in the file in whcich we are using the components that need the value from the same state
    - we import this createContext const -- which contains the created context 
    - then we also import  a useContext from react 
    - which we will then use to reAssigb values to the createContext original like this
        
        - const newName = useContext(importedOldNameCreateContxt)

    

