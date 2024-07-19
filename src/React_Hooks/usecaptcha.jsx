
export function UseCaptcha()
{
     var code = '';
     code = `${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)}
     ${Math.round(Math.random()*20)}`
     return code;
}