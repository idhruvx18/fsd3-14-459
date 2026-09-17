let teams=[
    {id:1,tname:"RUSTY",tl:"asish raj singh",email:"teamlead@gmail.com",members:6},
    {id:2,tname:"CODEFORCE",tl:"ayush",email:"teamleadcf@gmail.com",members:6}
];
let nextId=3;
export const getAllteams=()=>teams;
export const getTeamId=(id)=>teams.find((team)=>team.id===id);
export const addTeam=(newteam)=>{
   const team={id:nextId++,...newteam};
   teams.push(team);
   return team;
};
export const updateTeambyId=(id,updateTeam)=>{
    const team=getTeamId(id);
    if(!team) return null;
    Object.assign(team,updateTeam);
    return team;
}

export const deleteTeam=(id)=>{
    const index=teams.findIndex((team)=>team.id===id);
    if(index===-1) return false;
    teams.splice(index,1);
    return true;
}
