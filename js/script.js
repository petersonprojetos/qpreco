function addIntegracao(){
    
    let integracao = document.getElementById('selectIntegracao')
    let ativar = document.getElementById('ativiarDivIntegracao')

    integracao.addEventListener('change', function(){
        
        if (integracao.value == 'sim' || integracao.value == 'talvez') {
           ativar.hidden=false;
        } else {ativar.hidden=true;}
        
    })
}

function appMovel(){
    
    let appMovel = document.getElementById('selectAppMovel')
    let ativar = document.getElementById('ativiarDivMovel')

    appMovel.addEventListener('change', function(){
        
        if (appMovel.value == 'sim') {
            
            ativar.hidden=false;
        } else {ativar.hidden=true;}
        
    })
}

function marcar(){
    
    var chkPep = document.querySelector('#moduloPep');
    var chkAte = document.querySelector('#moduloAtendimento');
    var chkCtm = document.querySelector('#moduloContas');
    var chkAut = document.querySelector('#moduloAut');
    var chkAud = document.querySelector('#moduloAudConcorrente');
    var chkPag = document.querySelector('#moduloPagamento');
    var chkFat = document.querySelector('#moduloFatramento');

    chkPep.addEventListener("change", (el) => {
        if (chkPep.checked){
            document.getElementById('moduloAis').checked = true;
            document.getElementById('moduloAis').required = true;
            //document.getElementById('moduloAis').disabled = true;
        };
        if (!chkPep.checked){
            document.getElementById('moduloAis').checked = false;
            document.getElementById('moduloAis').required = false;
            //document.getElementById('moduloAis').disabled = false;
        };
    })
    
    chkAte.addEventListener("change", (el) => {
        if (chkAte.checked){
            document.getElementById('moduloCredenciamento').checked = true;
            document.getElementById('moduloCadastro').checked = true;
            document.getElementById('moduloAut').checked = true;
            document.getElementById('moduloCredenciamento').required = true;
            document.getElementById('moduloCadastro').required = true;
            document.getElementById('moduloAut').required = true;
        };
        if (!chkAte.checked){
            if (!chkAut.checked && !chkCtm.checked && !chkAud.checked && !chkPag.checked){
            document.getElementById('moduloCredenciamento').checked = false;
            document.getElementById('moduloCredenciamento').required = false;
            }
            if (!chkAut.checked && !chkCtm.checked && !chkAud.checked && !chkPag.checked && !chkFat.checked){
            document.getElementById('moduloCadastro').checked = false;
            document.getElementById('moduloCadastro').required = false;
            }
            if (!chkAud.checked){
            document.getElementById('moduloAut').checked = false;
            document.getElementById('moduloAut').required = false;
            }
        };
        
    })

    chkAut.addEventListener("change", (el) => {
        if (chkAut.checked){
            document.getElementById('moduloCredenciamento').checked = true;
            document.getElementById('moduloCadastro').checked = true;
            document.getElementById('moduloCredenciamento').required = true;
            document.getElementById('moduloCadastro').required = true;
        };
        if (!chkAut.checked){
            if (!chkAte.checked && !chkCtm.checked && !chkAud.checked && !chkPag.checked){
            document.getElementById('moduloCredenciamento').checked = false;
            document.getElementById('moduloCredenciamento').required = false;
            }
            if (!chkAte.checked && !chkCtm.checked && !chkAud.checked && !chkPag.checked && !chkFat.checked){
            document.getElementById('moduloCadastro').checked = false;
            document.getElementById('moduloCadastro').required = false;
            }
        };
        
    })

    chkCtm.addEventListener("change", (el) => {
        if (chkCtm.checked){
            document.getElementById('moduloCredenciamento').checked = true;
            document.getElementById('moduloCadastro').checked = true;
            document.getElementById('moduloCredenciamento').required = true;
            document.getElementById('moduloCadastro').required = true;
        };
        if (!chkCtm.checked){
            if (!chkAte.checked && !chkAut.checked && !chkAud.checked && !chkPag.checked){
            document.getElementById('moduloCredenciamento').checked = false;
            document.getElementById('moduloCredenciamento').required = false;
            }
            if (!chkAte.checked && !chkAut.checked && !chkAud.checked && !chkPag.checked && !chkFat.checked){
            document.getElementById('moduloCadastro').checked = false;
            document.getElementById('moduloCadastro').required = false;
            }
        };
        
    })

    chkAud.addEventListener("change", (el) => {
        if (chkAud.checked){
            document.getElementById('moduloCredenciamento').checked = true;
            document.getElementById('moduloCadastro').checked = true;
            document.getElementById('moduloAut').checked = true;
            document.getElementById('moduloCredenciamento').required = true;
            document.getElementById('moduloCadastro').required = true;
            document.getElementById('moduloAut').required = true;
        };
        if (!chkAud.checked){
            if (!chkAte.checked && !chkAut.checked && !chkCtm.checked && !chkPag.checked){
            document.getElementById('moduloCredenciamento').checked = false;
            document.getElementById('moduloCredenciamento').required = false;
            }
            if (!chkAte.checked && !chkAut.checked && !chkCtm.checked && !chkPag.checked && !chkFat.checked){
            document.getElementById('moduloCadastro').checked = false;
            document.getElementById('moduloCadastro').required = false;
            }
            if (!chkAte.checked && !chkAud.checked){
            document.getElementById('moduloAut').checked = false;
            document.getElementById('moduloAut').required = false;
            }
        };
        
    })

    chkPag.addEventListener("change", (el) => {
        if (chkPag.checked){
            document.getElementById('moduloCredenciamento').checked = true;
            document.getElementById('moduloCadastro').checked = true;
            document.getElementById('moduloContas').checked = true;
            document.getElementById('moduloCredenciamento').required = true;
            document.getElementById('moduloCadastro').required = true;
            document.getElementById('moduloContas').required = true;
        };
        if (!chkPag.checked){
            if (!chkAte.checked && !chkAut.checked && !chkCtm.checked && !chkAud.checked){
            document.getElementById('moduloCredenciamento').checked = false;
            document.getElementById('moduloCredenciamento').required = false;
            }
            if (!chkAte.checked && !chkAut.checked && !chkCtm.checked && !chkAud.checked && !chkFat.checked){
            document.getElementById('moduloCadastro').checked = false;
            document.getElementById('moduloCadastro').required = false;
            }
            if (!chkPag.checked){
            document.getElementById('moduloContas').checked = false;
            document.getElementById('moduloContas').required = false;
            }
        };
       
        
    })

    chkFat.addEventListener("change", (el) => {
        if (chkFat.checked){
            document.getElementById('moduloCadastro').checked = true;
            document.getElementById('moduloCadastro').required = true;
        };
        if (!chkFat.checked){
            document.getElementById('moduloCadastro').checked = false;
            document.getElementById('moduloCadastro').required = false;
        };
        
    })
}