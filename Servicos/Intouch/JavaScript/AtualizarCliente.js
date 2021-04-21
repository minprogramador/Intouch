var cepF, EnderecoF, NumeroF, BairroF, CidadeF, EstadoF, ComplementoF;

$().ready(function() {    

CarregarEndereco();

        $('#btnEnviar').click(function(){                        
             
        var idcli = $('#ctl00_ContentPlaceHolder1_HIDEN_IdCliente').val();
        var param = 
        '&cpfF=' + $('#cpfF').val() +  
        '&nomeF=' + $('#nomeF').val() +
        '&emailF=' + $('#emailF').val() +        
        '&dddF=' + $('#dddF').val() +
        '&telefoneF=' + $('#telefoneF').val() +
        '&ramalF=' + $('#ramalF').val() +         
        '&cepF=' + $('#cepF').val() +         
        '&enderecoF=' + $('#enderecoF').val() +        
        '&numeroF=' + $('#numeroF').val() + 
        '&bairroF=' + $('#bairroF').val() +
        '&cidadeF=' + $('#cidadeF').val() +
        '&estadoF=' + $('#estadoF').val() +
        '&complementoF=' + $('#complementoF').val() +
        '&enderecoCliIDF=' + $('#enderecoIDCom').val() + 
        
        '&cpfC=' + $('#cpfC').val() +
        '&nomeC=' + $('#nomeC').val() + 
        '&dddC=' + $('#dddC').val() +
        '&telefoneC=' + $('#telefoneC').val() +       
        '&ramalC=' + $('#ramalC').val() +              
        '&emailC=' + $('#emailC').val() +  
        '&cepC=' + $('#cepC').val() +                              
        '&enderecoC=' + $('#enderecoC').val() + 
        '&numeroC=' + $('#numeroC').val() + 
        '&bairroC=' + $('#bairroC').val() +                       
        '&cidadeC=' + $('#cidadeC').val() +        
        '&estadoC=' + $('#estadoC').val() +
        '&complementoC=' + $('#complementoC').val() +
        '&enderecoCliIDC=' + $('#enderecoIDFin').val() +        

        '&idCliente=' + idcli;
        
            var Informacoes = $.ajax({
            type: 'GET',
            dataType: 'json',
            data: 'Acao=Inserir&idcli=' + idcli + '&' + param,
            async: false,
            url: 'GenericHandler/AtualizarCliente.ashx'
            });                                  

            $('#ctl00_ContentPlaceHolder1_divInserir').hide();
            $('#ctl00_ContentPlaceHolder1_divValidar').show();

            return false;

        });
        
        $('#OpcaoEndereco').click(function(){                       
        
        if( $('#OpcaoEndereco').is(':checked') )
        {
        
            cepF = $('#cepF').val();
            EnderecoF = $('#enderecoF').val();
            NumeroF = $('#numeroF').val();
            BairroF = $('#bairroF').val();
            CidadeF = $('#cidadeF').val();
            EstadoF = $('#estadoF').val();
            ComplementoF = $('#complementoF').val()    
        
            $('#cepF').val($('#cepC').val());
            $('#cepF').attr('disabled','disabeld');
            
            $('#enderecoF').val($('#enderecoC').val());
            $('#enderecoF').attr('disabled','disabeld');
            
            $('#numeroF').val($('#numeroC').val());
            $('#numeroF').attr('disabled','disabeld');
            
            $('#bairroF').val($('#bairroC').val());
            $('#bairroF').attr('disabled','disabeld');
            
            $('#cidadeF').val($('#cidadeC').val());
            $('#cidadeF').attr('disabled','disabeld');
            
            $('#estadoF').val($('#estadoC').val());
            $('#estadoF').attr('disabled','disabeld');
            
            $('#complementoF').val($('#complementoC').val());
            $('#complementoF').attr('disabled','disabeld');
        }
        else
        {
            $('#cepF').val(cepF);
            $('#enderecoF').val(EnderecoF);
            $('#numeroF').val(NumeroF);
            $('#bairroF').val(BairroF);
            $('#cidadeF').val(CidadeF);
            $('#estadoF').val(EstadoF);
            $('#complementoF').val(ComplementoF);  
                                   
            $('#cepF').removeAttr("disabled");            
            $('#enderecoF').removeAttr("disabled");            
            $('#numeroF').removeAttr("disabled");            
            $('#bairroF').removeAttr("disabled");            
            $('#cidadeF').removeAttr("disabled");            
            $('#estadoF').removeAttr("disabled");            
            $('#complementoF').removeAttr("disabled");                      
        }        
        });    
        
        $('#cpfF').blur(function(){
        
        if (validarCPF($('#cpfF').val()))
        {
            var doc = $('#cpfF').val();

            var nomeFin = $.ajax({
                type: 'GET',
                dataType: 'json',
                data: 'Acao=nome&doc=' + $('#cpfF').val(),
                async: false,
                url: 'GenericHandler/AtualizarCliente.ashx'
                });                                 
                $('#nomeF').val(nomeFin.responseText);                           
        }
        else
        {
            $('#nomeF').val(''); 
            alert("CPF Inválido");
        }        
                                
        }); 
        
        $('#cpfC').blur(function(){
        
        if (validarCPF($('#cpfC').val()) == true)
        {
            var doc = $('#cpfC').val();        
            var nomeCom = $.ajax({
            type: 'GET',
            dataType: 'json',
            data: 'Acao=nome&doc=' + $('#cpfC').val(),
            async: false,
            url: 'GenericHandler/AtualizarCliente.ashx'
            });            
            $('#nomeC').val(nomeCom.responseText);
        }
        else
        {
            $('#nomeF').val(''); 
            alert("CPF inválido");
        }
        });
});

function ObterClienteAtualizado(idCliente)
{
    var idcli = $('#ctl00_ContentPlaceHolder1_HIDEN_IdCliente').val();
    var respondeu = $.ajax({
        type: 'GET',
        dataType: 'json',
        data: 'Acao=obterRespondeu&IdCli=' + idcli,
        async: false,
        url: 'GenericHandler/AtualizarCliente.ashx'
    });
    
    if(respondeu == 1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function CarregarEndereco()
{
    var idcli = $('#ctl00_ContentPlaceHolder1_HIDEN_IdCliente').val();        
    var endereco = $.ajax({
        type: 'GET',
        dataType: 'json',
        data: 'Acao=CarregarEndereco&IdCli=' + idcli,
        async: false,
        url: 'GenericHandler/AtualizarCliente.ashx'
    }); 
    
    var end = endereco.responseText.split(";");
        
    $('#enderecoC').val(end[0]);
    $('#numeroC').val(end[1]);
    $('#complementoC').val(end[2]);
    $('#bairroC').val(end[3]);
    $('#cidadeC').val(end[4]);
    $('#estadoC').val(end[5]);
    $('#cepC').val(end[6]);  
    $('#enderecoIDCom').val(end[7]);
    
    $('#enderecoF').val(end[8]);
    $('#numeroF').val(end[9]);
    $('#complementoF').val(end[10]);
    $('#bairroF').val(end[11]);
    $('#cidadeF').val(end[12]);
    $('#estadoF').val(end[13]);
    $('#cepF').val(end[14]);  
    $('#enderecoIDFin').val(end[15]);
    
    //$('#enderecoIDFin')          
     
}

function validarCPF(cpf) {
 
    cpf = cpf.replace(/[^\d]+/g,'');
 
    if(cpf == '') return false;
 
    // Elimina CPFs invalidos conhecidos
    if (cpf.length != 11 || 
        cpf == "00000000000" || 
        cpf == "11111111111" || 
        cpf == "22222222222" || 
        cpf == "33333333333" || 
        cpf == "44444444444" || 
        cpf == "55555555555" || 
        cpf == "66666666666" || 
        cpf == "77777777777" || 
        cpf == "88888888888" || 
        cpf == "99999999999")
        return false;
     
    // Valida 1o digito
    add = 0;
    for (i=0; i < 9; i ++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
     
    // Valida 2o digito
    add = 0;
    for (i = 0; i < 10; i ++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
         
    return true;
    
}