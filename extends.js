class teamMember{
    name;
    location;
    constructor(name, location)
    {
        this.name = name;
        this.location = location;
    }

    provideFeedback()
    {
        console.log(`${this.name} thank you for your feedback`);
    }
}

class instruction extends teamMember{
 
    designation = 'web course Instructor'
    team = 'web team'
    
    constructor(name,location)
    {
       super(name,location)
    }

    startSupperSession(time)
    {
        console.log(`start the support session at ${time}`)
    }

    createQuize(module)
    {
        console.log(`please create quiz for module ${module}`)
    }

   
}


class developer extends teamMember{
    
    designation = 'web course Instructor'
    team = 'web team'
    
    tech;
    constructor(name,location,tech)
    {
        super(name,location)
        this.tech = tech;

    }

    devoperFeature(feature)
    {
        console.log(`start the support session at ${feature}`)
    }

    release(version)
    {
        console.log(`please create quiz for module ${version}`)
    }

   
}

class jobplaceMent extends teamMember{
    
    designation = 'job Placment commandos'
    team = 'job pleacement'
    
   
    constructor(name,location)
    {
        super(name,location);
        

    }

    whereFeature(feature)
    {
        console.log(`start the support session at ${feature}`)
    }

    from(version)
    {
        console.log(`please create quiz for module ${version}`)
    }

    togo()
    {
        console.log(`${this.name} thank you for your feedback`);
    }
}

const alia = new developer('alia','dhaka','react');
console.log(alia);
alia.provideFeedback();
alia.devoperFeature('dolon')
