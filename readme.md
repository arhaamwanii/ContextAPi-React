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
g an context is unusbale but the value that matters is the one we  will pass in as a prop - at the time of wrapping stuff with it THAT IS THE ONE WHICH WILL BE USED 
    - BUT EVEN AFTER DOING THIS : we did not pass in stuff to make shit editable so next we can do that by instead of direclty passing the state variable we create another varibale inside there we desrudtue the state and then state in the fucnction that you wnat to pass in -- then we pass in thsi newly formed variable into the VALUE prop and the fuction is also now usable

    - the original value which were put in the create context are not used 
    - instead the ones that are passed in in the value prop of the wrapper are - variable(which contains the fucntions and states that we want to use in the function -- we still pass them in throught the callbacks but this time we don't drill them through multiple components we just directly get them in there)

- ADVANCE STATE MANAGMEMENT : CONTEXT API (CREATE AND USE)
    - USE REDUCER    
    solving problims like 
    PROP DRILLING : it is the process of passing states is the process of passing a single state through multiple layers just to use it in some place else 
    - write a shit ton of boiler plate code just to do that
    - drill the state through multiple commponenet just to use them 


    - sharing data - across layers of components easily context value 

    - you create a context and then wrap that context across multiple layers components of your app
    - you can connect your state to this context and you have your RPOP DRILLING SOLVED

    //VALUE PROP -- THE DEFAULT VALUE IS ONTY USED IF A COMPONENT WHICH IS NOT WRAPPED IN THE .PROVIDER TRIES TO ACCESS THE VALU
    //OTHER WISE WE HAVE TO USE THE VALUE PROP TO ASSIGN THE VALUE TO THE

    default value is only used in the case of a non .provider wrapped component tries to use it which in that case would simply use the value provided in the default 

    also will give you autoCompletion while using it


    LINKING IT TO STATE - COTNEXT CONNECTED TO STATE

    - well that is pretty simple inpalce of the value prop --- use the stateValriable you want to pass down

    - you can not update the state like this, 
        - so in order to pass down the state updating function, we just make a new object store that shit in that and then pass that down then use it instead 
        - naming can be arranged to match 
        - just like that we use a single object to pass down multiple thigs



    

