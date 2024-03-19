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

    - linking it to a state
    : inside of the VALUE PROP for the wrapper around components set it to be the STATE variable
        - but we can edit it like that 

    - the value we put in while creating an context is unusbale but the value that matters is the one we  will pass in as a prop - at the time of wrapping stuff with it THAT IS THE ONE WHICH WILL BE USED 
    - BUT EVEN AFTER DOING THIS : we did not pass in stuff to make shit editable so next we can do that by instead of direclty passing the state variable we create another varibale inside there we desrudtue the state and then state in the fucnction that you wnat to pass in -- then we pass in thsi newly formed variable into the VALUE prop and the fuction is also now usable

    - the original value which were put in the create context are not used 
    - instead the ones that are passed in in the value prop of the wrapper are - variable(which contains the fucntions and states that we want to use in the function -- we still pass them in throught the callbacks but this time we don't drill them through multiple components we just directly get them in there)


    

