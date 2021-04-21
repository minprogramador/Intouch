$().ready(function() {
if ($('#enderecoC').val().length >0)
    {CarregarContato();}
    
    $('#btnFechar').click(function(){
    
//            $('#validarctl00_ContentPlaceHolder1_divInserir').hide();
//            $('#validarctl00_ContentPlaceHolder1_divValidar').hide();
//            $('#validarctl00_ContentPlaceHolder1_divBanner').show(); 
window.location = "";
            return false;   
    });
        
    $('#ContatoComercialValido').click(function(){        

        ValidarContatoCliente($('#idContatoC').val(), 1, $('#validarnomeC').val(), $('#validarcpfC').val());        
        $('#validarcpfC').attr('readonly', true);        
        $('#validarnomeC').attr('readonly', true);

    });
    
    $('#TelefoneComercialValido').click(function(){
    
        ValidarTelCliente($('#idContatoC').val(), $('#idTelC').val(), 1, $('#validardddC').val(), $('#validartelC').val(), $('#validarramC').val());               
        $('#validarramC').attr('readonly', true);
        $('#validardddC').attr('readonly', true);
        $('#validartelC').attr('readonly', true);

    });
    
    $('#EmailComercialValido').click(function(){    
        ValidarEmailCliente($('#idContatoC').val(), $('#idEmailC').val(), 1, $('#validaremailC').val());
        $('#validaremailC').attr('readonly', true);

    });
        
    
    $('#ContatoFinanceiroValido').click(function(){

        ValidarContatoCliente($('#idContatoF').val(), 1, $('#validarnomeF').val(), $('#validarcpfF').val());         
        $('#validarcpfF').attr('readonly', true); 
        $('#validarnomeF').attr('readonly', true); 
        
    });
    
    $('#TelFinanceiroValido').click(function(){
    
        ValidarTelCliente($('#idContatoF').val(), $('#idTelF').val(), 1, $('#validardddF').val(), $('#validartelF').val(), $('#validarramF').val());               
        $('#validarramF').attr('readonly', true); 
        $('#validartelF').attr('readonly', true); 
        $('#validardddF').attr('readonly', true); 

    });
    
    $('#EmailFinanceiroValido').click(function(){
        
        ValidarEmailCliente($('#idContatoF').val(), $('#idEmailF').val(), 1, $('#validaremailF').val());        
        $('#validaremailF').attr('readonly', true); 

    }); 
    
           
    $('#ContatoComercialInvalido').click(function(){

         ValidarContatoCliente($('#idContatoC').val(), 0, $('#validarnomeC').val(), $('#validarcpfC').val());
        $('#validarcpfC').attr('readonly', true); 
        $('#validarnomeC').attr('readonly', true); 
        

    });
    
    $('#TelefoneComercialInvalido').click(function(){
    
        ValidarTelCliente($('#idContatoC').val(), $('#idTelC').val(), 0, $('#validardddC').val(), $('#validartelC').val(), $('#validarramC').val());        
        $('#validarramC').attr('readonly', true); 
        $('#validartelC').attr('readonly', true); 
        $('#validardddC').attr('readonly', true); 

    });
    
    $('#EmailComercialInvalido').click(function(){
    
        ValidarEmailCliente($('#idContatoC').val(), $('#idEmailC').val(), 0, $('#validaremailC').val());        
        $('#validaremailC').attr('readonly', true); 
    });
        
    
    $('#ContatoFinanceiroInvalido').click(function(){

        ValidarContatoCliente($('#idContatoF').val(), 0, $('#validarnomef').val(), $('#validarcpfF').val());
        $('#validarcpfF').attr('readonly', true);
        $('#validarnomeF').attr('readonly', true);                
    });
    
    $('#TelFinanceiroInvalido').click(function(){
    
        ValidarTelCliente($('#idContatoF').val(), $('#idTelF').val(), 0, $('#validardddF').val(), $('#validartelF').val(), $('#validarramF').val());
        $('#validarramF').attr('readonly', true);
        $('#validartelF').attr('readonly', true);
        $('#validardddF').attr('readonly', true);
    });
    
    $('#EmailFinanceiroInvalido').click(function(){
        
       ValidarEmailCliente($('#idContatoF').val(), $('#idEmailF').val(), 0, $('#validaremailF').val());       
       $('#validaremailF').attr('readonly', true);

    });
    
    $('#ContatoComercialEditar').click(function(){
     if($('#idContatoC').val() != '')
    {             
        $('#validarnomeC').removeAttr("readonly");   
        $('#validarcpfC').removeAttr("readonly");   
    }    
    });
    
    $('#TelefoneComercialEditar').click(function(){
    if($('#idTelC').val() != '')
    {
       $('#validarramC').removeAttr("readonly"); 
       $('#validartelC').removeAttr("readonly"); 
       $('#validardddC').removeAttr("readonly"); 
    }   
    });
    
    $('#EmailComercialEditar').click(function(){
    if($('#idEmailC').val() != '')
        $('#validaremailC').removeAttr("readonly"); 
    });
        
    
    $('#ContatoFinanceiroEditar').click(function(){
    if($('#idContatoF').val() != '')
    {
        $('#validarnomeF').removeAttr("readonly");   
        $('#validarcpfF').removeAttr("readonly");  
    }
    });
    
    $('#TelFinanceiroEditar').click(function(){
       if($('#idTelF').val() != '')
    {
       $('#validarramF').removeAttr("readonly"); 
       $('#validartelF').removeAttr("readonly"); 
       $('#validardddF').removeAttr("readonly"); 
    }
    });
    
    $('#EmailFinanceiroEditar').click(function(){
    if($('#idEmailF').val() != '')
        $('#validaremailF').removeAttr("readonly"); 

    });       

});

function ValidarContatoCliente(contatoID, valido, nome, cpf)
{
    var registrou = $.ajax({
        type: 'GET',
        dataType: 'json',
        data: 'Acao=Contato&contatoID=' + contatoID + '&valido=' + valido + '&nome=' + nome + '&cpf=' + cpf,
        async: false,
        url: 'GenericHandler/ValidarContatos.ashx'
    });    
}

function ValidarTelCliente(contatoID, contatoTel, valido, ddd, telefone, ramal)
{
    var registrou = $.ajax({
        type: 'GET',
        dataType: 'json',
        data: 'Acao=Tel&contatoID=' + contatoID + '&contatoTel=' + contatoTel + '&valido=' + valido + '&ddd=' + ddd + '&telefone=' + telefone + '&ramal=' + ramal,
        async: false,
        url: 'GenericHandler/ValidarContatos.ashx'
    });    
}

function ValidarEmailCliente(contatoID, contatoEmail, valido, email)
{
    var registrou = $.ajax({
        type: 'GET',
        dataType: 'json',
        data: 'Acao=Email&contatoID=' + contatoID + '&contatoEmail=' + contatoEmail + '&valido=' + valido + '&email=' + email,
        async: false,
        url: 'GenericHandler/ValidarContatos.ashx'
    });    
}

function CarregarContato()
{
    var retorno = $.ajax({
        type: 'GET',
        dataType: 'json',
        data: 'Acao=Carregar', 
        async: false,
        url: 'GenericHandler/ValidarContatos.ashx'
    });
    
    var dados = retorno.responseText.split(";");
    
    $('#idContatoF').val(dados[0]);
    $('#validarcpff').val(dados[1])
    $('#validarnomeF').val(dados[2]);
    $('#validardddF').val(dados[3]);
    $('#validartelF').val(dados[4]);
    $('#validarramalF').val(dados[5]);
    $('#validaremailF').val(dados[6]);
    $('#idTelF').val(dados[8]);
    $('#idEmailF').val(dados[7]);
    
    
    $('#idContatoC').val(dados[9]);
    $('#validarcpfC').val(dados[10])
    $('#validarnomeC').val(dados[11]);
    $('#validardddC').val(dados[12]);
    $('#validartelC').val(dados[13]);
    $('#validarramalC').val(dados[14]);
    $('#validaremailC').val(dados[15]);
    $('#idEmailC').val(dados[17]);
    $('#idTelC').val(dados[16]);              
}