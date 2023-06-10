function appMovel(){
    
    let appMovel = document.getElementById('selectAppMovel')

    appMovel.addEventListener('change', function(){
        
        if (appMovel.value == 'sim') {
            
            document.getElementById('addDiv').innerHTML = '<div class="input-group" id="addAppMovel"><div class="input-group-prepend"><span class="input-group-text" id="quaisApps">Quais Apps para dispositivos móveis?</span></div><input type="text" class="form-control" placeholder="Liste os nomes dos apps ou para que eles servem..." name="quaisApps" aria-label="Apps para dispositivos móveis" aria-describedby="basic-addon1" required/></div>'
        } else {document.getElementById('addDiv').innerHTML = ''}
        
    })
}

function addIntegracao(){
    
    let integracao = document.getElementById('selectIntegracao')

    integracao.addEventListener('change', function(){
        
        if (integracao.value != 'não') {
            
            document.getElementById('addDiv').innerHTML = '<div class="input-group" id="addIntegracao"><div class="input-group-prepend"><span class="input-group-text" id="integrcaoApi">Tais sistemas possuem documentações de APIs?</span></div><input type="text" class="form-control" placeholder="Informe se possuem documentação das APIs para integração..." name="integracaoApi" aria-label="Integração via Apis" aria-describedby="basic-addon1" /></div>'
        } else {document.getElementById('addDiv').innerHTML = ''}
        
    })
}