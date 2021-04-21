function abrirModalAguarde() {
    $find("ctl00_ContentPlaceHolder1_mpeAguarde").show();
}

function abrirModalAtualizarSaldo(textoModal) {
    abrirModalAguarde();
    $('#divIntegracaoSenderMensagem').html(textoModal);
    $('#ctl00_ContentPlaceHolder1_divIntegracaoSenderAtualizarSaldo').show();
    $('#ctl00_ContentPlaceHolder1_divIntegracaoSenderAtualizarSaldo').css({ "z-index": "999999", "position": "relative" });
}

function fecharModalAguarde() {
    $find("ctl00_ContentPlaceHolder1_mpeAguarde").hide();
}

function fecharModalMsg() {
    $find("ctl00_ContentPlaceHolder1_mpeMsg").hide();
}

function fecharModalNovoEnd() {
    $find("ctl00_ContentPlaceHolder1_mpeTratarDados").hide();
}

function fecharModalResultadoMenuEsquerda() {
    $find("ctl00_ContentPlaceHolder1_mpeResultadoMenuEsquerda").hide();
}
function fecharModalSPC() {
    $find("ctl00_ContentPlaceHolder1_mpeSPC").hide();
}
function fecharModalDataPrev() {
    $find("ctl00_ContentPlaceHolder1_mpeDataPrev").hide();
}

function VisualizarControlesCampanha(valor) {
    if (valor === 0) {
        document.getElementById('ctl00_ContentPlaceHolder1_lblCpfCampanha').style.visibility = 'hidden';
        document.getElementById('ctl00_ContentPlaceHolder1_txtCpfCampanha').style.visibility = 'hidden';
    }
    if (valor === 1) {
        document.getElementById('ctl00_ContentPlaceHolder1_lblCpfCampanha').style.visibility = 'visible';
        document.getElementById('ctl00_ContentPlaceHolder1_txtCpfCampanha').style.visibility = 'visible';
    }
}

function PesquisarDadosNB(numeroBeneficio) {
    document.getElementById('ctl00_ContentPlaceHolder1_txtNB').value = numeroBeneficio;
    document.getElementById('ctl00_ContentPlaceHolder1_btnGetConsignadoPorNumeroBeneficio').click();
}

function PermitirSessao() {
    $('#ctl00_ContentPlaceHolder1_ComponenteVive').val('True');
    return true;
}

function Numero(e) {
    navegador = /msie/i.test(navigator.userAgent);
    var tecla = null;
    if (navegador)
        tecla = event.keyCode;
    else
        tecla = e.which;

    if (tecla > 47 && tecla < 58) // numeros de 0 a 9
        return true;
    else {
        if (tecla !== 8) // backspace
            return false;
        else
            return true;
    }
}

function GetIdUsuario(valor) {
    if (valor.split('|').length === 2) {
        novoArray = valor.split('|');
        document.getElementById('ctl00_ContentPlaceHolder1_txtPesqCpfCnpj').value = novoArray[0]; // retornará "DsLogin"
        document.getElementById('ctl00_ContentPlaceHolder1_btnNovaConsulta').click();
    }
}

$(document).ready(function () {
    function rodape() {
        var windheight = $(window).height();
        var height = windheight - 110;
        $(".all-elements").css({ "min-height": height + "px" });
    }
    rodape();

    $('input, textarea').placeholder();

    //Tabs
    if ($(".tabs-inadimplencia")[0]) {
        $(".tabs-inadimplencia").tabs();
    }

    //Table Even
    $(".inadimplencia_section .tabela_resumo table tr:even").css({ "background": "#EBEBEB" });
    $(".inadimplencia_section .multi-content tr:odd").css({ "background": "#EBEBEB" });

    $("#accordion").accordion({ heightStyle: "content", collapsible: true });
    $(".ui-accordion-content").css({ "height": "auto" });

    if ($('.UsuarioItens a').text().indexOf('OPERAÇÃO MERCANTIL 01') > 0) {
        $('#LiObito').css('display', 'none');
        $('#LIINSS').css('display', 'none');
    }

    //            var heightWindowFooter = $(window).height();
    //            //var heightWindowContextBase = $('.Site').height();
    //            var heightWindowContextBaseM = $('.Meio').height();
    //            //var heightWindowContextBaseFinal = heightWindowContextBase + heightWindowContextBaseM;
    //            //var heightWindowContext = heightWindowContextBase + 60;
    //            //alert(heightWindowContextBase);
    //            if (heightWindowFooter > heightWindowContextBaseM) {
    //                $('.RodapeAuto').css({'position':'fixed','bottom':'0px','width':'100%'});
    //            } else {
    //            $('.RodapeAuto').css({ 'position': 'relative', 'bottom': '0px', 'width': '100%' });
    //            }

    $('.menu-new-viewer ul li').click(function () {
        var id = $(this).children().eq(1).attr('id');
        //alert(id);

        $('.menu-new-viewer ul li').removeClass('active');
        $(this).addClass('active');

        $('.content-viewer').hide();
        $('.' + id).fadeIn();
    });


    $('.submenu').hover(
        function () {
            $(this).children('ul').css({ 'display': 'block' });
        },
        function () {
            $(this).children('ul').css({ 'display': 'none' });
        });

    $('#ctl00_ContentPlaceHolder1_ComponenteVive').val('False');


    $('#ctl00_ContentPlaceHolder1_AccordionPaneOpcoesAvancadas_content_txtPesqLogradouro').blur(function () {
        var campos;

        $('#ctl00_ContentPlaceHolder1_AccordionPaneOpcoesAvancadas_content_txtPesqCidade2').val('');
        $('#ctl00_ContentPlaceHolder1_AccordionPaneOpcoesAvancadas_content_txtPesqBairro2').val('');

        campos = $('#ctl00_ContentPlaceHolder1_AccordionPaneOpcoesAvancadas_content_txtPesqLogradouro').val().split(',');
        if (campos.length === 3) {
            $('#ctl00_ContentPlaceHolder1_AccordionPaneOpcoesAvancadas_content_txtPesqCidade2').val(campos[1]);
        }
        else if (campos.length === 4) {
            $('#ctl00_ContentPlaceHolder1_AccordionPaneOpcoesAvancadas_content_txtPesqBairro2').val(campos[1]);
            $('#ctl00_ContentPlaceHolder1_AccordionPaneOpcoesAvancadas_content_txtPesqCidade2').val(campos[2]);
        }
    });

    //           var prm = Sys.WebForms.PageRequestManager.getInstance();

    //prm.add_endRequest(function() {
    //    // re-bind your jQuery events here


    $('#ctl00_ContentPlaceHolder1_liLocal').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_divInfo').show();
    });

    $('#ctl00_ContentPlaceHolder1_liIR').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_divRestituicaoIR').show();
    });

    $('#ctl00_ContentPlaceHolder1_liParticipEmpresarial').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_DivParticipEmpresarial').show();
    });

    $('#ctl00_ContentPlaceHolder1_lifacebook').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_DivFacebook').show();
    });

    $('#ctl00_ContentPlaceHolder1_liCinss').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_DivuDataPrev').show();
    });

    $('#ctl00_ContentPlaceHolder1_liObito').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_DivObito').show();
    });

    $('#ctl00_ContentPlaceHolder1_liMaisf').click(function () {
        OcultarTodasConsultas();
        $("#ctl00_ContentPlaceHolder1_TelRelacionados").show();
    });

    $('#ctl00_ContentPlaceHolder1_liSitua').click(function () {
        OcultarTodasConsultas();
        $("#ctl00_ContentPlaceHolder1_DivSituacaoCadastral").show();
    });

    $('#ctl00_ContentPlaceHolder1_liPerfi').click(function () {
        OcultarTodasConsultas();
        $("#ctl00_ContentPlaceHolder1_DivSociodemografico").show();
    });

    $('#ctl00_ContentPlaceHolder1_liPerfc').click(function () {
        OcultarTodasConsultas();
        $("#ctl00_ContentPlaceHolder1_DivPerfilConsumo").show();
    });

    $('#ctl00_ContentPlaceHolder1_liVeicu').click(function () {
        OcultarTodasConsultas();
        $("#ctl00_ContentPlaceHolder1_DivVeiculos").show();
    });

    $('#ctl00_ContentPlaceHolder1_liCruim').click(function () {
        OcultarTodasConsultas();
        $("#ctl00_ContentPlaceHolder1_ContatoInvalido").show();
    });

    $('#ctl00_ContentPlaceHolder1_liCcfch').click(function () {
        OcultarTodasConsultas();
        $("#ctl00_ContentPlaceHolder1_DivCCF").show();
    });

    $('#ctl00_ContentPlaceHolder1_liConsultaDocs').click(function () {
        OcultarTodasConsultas();
        $("#ctl00_ContentPlaceHolder1_DivConsultaDocumentos").show();
    });

    $('#ctl00_ContentPlaceHolder1_liConsultaBolsaFamilia').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_DivConsultaBolsaFamilia').show();
    });

    $('#ctl00_ContentPlaceHolder1_liConsultaPlanoSaude').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_DivConsultaPlanoSaude').show();
    });

    $('#ctl00_ContentPlaceHolder1_liConsultaSeguroDesemprego').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_DivSeguroDesemprego').show();
    });

    $('#ctl00_ContentPlaceHolder1_liConsultaTomadoresDecisao').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_DivTomadoresDecisao').show();
    });

    $('#ctl00_ContentPlaceHolder1_liPelig').click(function () {
        OcultarTodasConsultas();
        $("#ctl00_ContentPlaceHolder1_DivPfPjRelacionadas").show();
    });

    $('#ctl00_ContentPlaceHolder1_liVizin').click(function () {
        OcultarTodasConsultas();
        $("#ctl00_ContentPlaceHolder1_DivVizinhos").show();
    });

    $('#ctl00_ContentPlaceHolder1_liInadi').click(function () {
        OcultarTodasConsultas();
        $("#ctl00_ContentPlaceHolder1_DivInadimplencia").show();
    });

    $('#ctl00_ContentPlaceHolder1_liConsultou').click(function () {
        OcultarTodasConsultas();
        $("#ctl00_ContentPlaceHolder1_DivConsultou").show();
    });

    $('#ctl00_ContentPlaceHolder1_liVeiculos').click(function () {
        OcultarTodasConsultas();
        $("#ctl00_ContentPlaceHolder1_DivConsultaVeicular").show();
    });

    $('#ctl00_ContentPlaceHolder1_liConsultaLocalizacaoMaeTelefones').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_divConsultaLocalizacaoMaeTelefones').show();
    });

    $('#ctl00_ContentPlaceHolder1_liCHiscon').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_DivConsultaHisconInss').show();
    });

    $('#ctl00_ContentPlaceHolder1_liCSgdConsultaVeicular').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_DivSgdConsultaVeicular').show();
    });

    $('#ctl00_ContentPlaceHolder1_liCSgdConsultaVeicularDetalhada').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_DivSgdConsultaVeicularDetalhada').show();
    });

    $('#ctl00_ContentPlaceHolder1_liCCnh').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_DivCnh').show();
    });

    $('#ctl00_ContentPlaceHolder1_liCScoreCreditoRecorrenteSW').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_divScoreCreditoRecorrenteSW').show();
    });

    $('#ctl00_ContentPlaceHolder1_liCScoreCreditoEventualSW').click(function () {
        OcultarTodasConsultas();
        $('#ctl00_ContentPlaceHolder1_divScoreCreditoEventualSW').show();
    });

    $("#LIDefault").click(function () {
        DesmarcarOpcoes('Localização');
    });

    $("#LIMaisTel").click(function () {
        DesmarcarOpcoes('Mais Telefones');
    });

    $("#LISitCad").click(function () {
        DesmarcarOpcoes('Situação Cadastral');
    });

    $("#LiMorto").click(function () {
        DesmarcarOpcoes('Óbito');
    });

    $("#LISocioDemografico").click(function () {
        DesmarcarOpcoes('Perfil Sociodemográfico');
    });

    $("#LIPerfil").click(function () {
        DesmarcarOpcoes('Perfil de Consumo');
    });

    $("#LIBadContatos").click(function () {
        DesmarcarOpcoes('Contatos Ruins');
    });

    $("#LICheque").click(function () {
        DesmarcarOpcoes('CCF (Consulta Cheque)');
    });

    $("#LIPELigada").click(function () {
        DesmarcarOpcoes('Pessoas/Empresas Relacionadas');
    });

    $("#LINSS").click(function () {
        DesmarcarOpcoes('Consulta INSS');
    });

    $("#LIParticipEmp").click(function () {
        DesmarcarOpcoes('Participação Empresarial');
    });

    $("#LIFacebook").click(function () {
        DesmarcarOpcoes('Facebook');
    });

    $("#LIQuemConsultou").click(function () {
        DesmarcarOpcoes('Quem Consultou');
    });

    carregarModalEnderecoTelefone();
    carregarAssinanteDoTelefone();

    //Validar campos de consulta
    $('input[name*="txtPesqDdd"], input[name*="txtPesqTelefone"], input[name*="txtOutroBeneficio"], input[name="txtPesqCep"], #inputCEPEndereco, #inputNumeroEndereco').keypress(function (e) {
        if (e.which !== 8 && e.which !== 0 && e.which !== 13 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $('input[name*="txtPesqCpfCnpj"]').keypress(function (e) {
        if (e.which !== 8 && e.which !== 0 && e.which !== 13 && (e.which < 45 || e.which > 57)) {
            return false;
        }
    });

    $('input[name*="txtPesqDdd"]').keyup(function () {
        if ($(this).val().length === 2)
            $('input[name*="txtPesqTelefone"]').focus();
    });

    $('#selectEstado, #selectEstadoPorNome').change(function () {
        var result = $.ajax({
            type: 'POST',
            dataType: 'json',
            data: "{'uf':'" + $(this).val() + "'}",
            contentType: 'application/json; charset=utf-8',
            async: false,
            url: ''
        });

        if ((result !== 'undefined') || (result !== null)) {
            $('#selectCidade').html('').append($.parseJSON(result.responseText).d);
            $('#selectCidade').focus();
            $('#selectCidadePorNome').html('').append($.parseJSON(result.responseText).d);
            $('#selectCidadePorNome').focus();
            $('input[id*="txtPesqUF"]').val($(this).val());
        }
    });

    $('#selectCidade, #selectCidadePorNome').change(function () {
        $('input[id*="txtPesqCidade"]').val($(this).val());
    });

    carregarQtdQuemConsultou();
    $('.the-tratamento').click(function () {
        carregarConfigTratamento();
        carregarCamposTratarDados('#rbtEnderecoTratamento');
        limparCamposPessoaTratamento();
        limparCamposEnderecoTratamento();
    });

    $('input[name="tratamento"]').click(function () {
        carregarCamposTratarDados('#' + $(this).attr('id').toString());
        $(".bg-escolhaSuaConsulta").fadeOut();
        $(".escolhaSuaConsulta").fadeOut();
    });

    $('.tratamento-config ul li input').click(function () {
        $(".localizacao_group").hide();
        var rbtCaracteresMaiusculas = $('#rbtCaracteresMaiusculas').is(':checked');
        var rbtCaracteresMinusculas = $('#rbtCaracteresMinusculas').is(':checked');
        var rbtCaracteresIniciaisMaiusculas = $('#rbtCaracteresIniciaisMaiusculas').is(':checked');
        var rbtAcentuarNomeSim = $('#rbtAcentuarNomeSim').is(':checked');
        var rbtAbreviarEnderecoSim = $('#rbtAbreviarEnderecoSim').is(':checked');
        var rbtRecuperarCEPSim = $('#rbtRecuperarCEPSim').is(':checked');
        var rbtExplodirEnderecoSim = $('#rbtExplodirEnderecoSim').is(':checked');
        var rbtGerarMatchCodeSim = $('#rbtGerarMatchCodeSim').is(':checked');
        var dataStr = "{'caracteresMaiusculas' : '" + rbtCaracteresMaiusculas + "',";
        dataStr = dataStr + "'caracteresMinusculas' : '" + rbtCaracteresMinusculas + "',";
        dataStr = dataStr + "'caracteresIniciaisMaiusculas' : '" + rbtCaracteresIniciaisMaiusculas + "',";
        dataStr = dataStr + "'acentuarNomeSim' : '" + rbtAcentuarNomeSim + "',";
        dataStr = dataStr + "'abreviarEnderecoSim' : '" + rbtAbreviarEnderecoSim + "',";
        dataStr = dataStr + "'recuperarCEPSim' : '" + rbtRecuperarCEPSim + "',";
        dataStr = dataStr + "'explodirEnderecoSim' : '" + rbtExplodirEnderecoSim + "',";
        dataStr = dataStr + "'gerarMatchCodeSim' : '" + rbtGerarMatchCodeSim + "'}";

        var result = $.ajax({
            type: 'POST',
            dataType: 'json',
            data: dataStr,
            contentType: 'application/json; charset=utf-8',
            async: false,
            url: 'Home.aspx/setConfigTratamento'
        });
        if ((result !== 'undefined') || (result !== null)) {
            $('#divLabel').html('').append($.parseJSON(result.responseText).d);
        }
        else
            $('#divLabel').html('');
    });

    $('#buttonTratarPessoas').click(function () {
        if ($('#inputNomePessoa').val() !== '') {
            var result = $.ajax({
                type: 'POST',
                dataType: 'json',
                data: "{'nome':'" + $('#inputNomePessoa').val() + "'}",
                contentType: 'application/json; charset=utf-8',
                async: false,
                url: 'Home.aspx/tratarPessoa'
            });

            if ((result !== 'undefined') || (result !== null)) {
                $('#tratamentoPessoa').html('').append($.parseJSON(result.responseText).d);
            }
            else {
                limparCamposPessoaTratamento();
            }
        }
        else {
            $('#tratamentoPessoa').html('').append('Campos obrigatórios em branco!');
        }
    });

    $('#buttonLimparPessoas').click(function () {
        limparCamposPessoaTratamento();
    });

    $('#buttonTratarEndereco').click(function () {


        //31000-000 (cep unico como exemplo)
        if (($('#inputCEPEndereco').val() !== '') ||
            ($('#inputLogradouroEndereco').val() !== '') && ($('#inputCidadeEndereco').val() !== '') && ($('#inputEstadoEndereco').val() !== '')) {
            //if (($('#inputLogradouroEndereco').val() !== '') && ($('#inputCidadeEndereco').val() !== '') && ($('#inputEstadoEndereco').val() !== '')) {
            var data = "{'cep':'" + $('#inputCEPEndereco').val() + "',";
            data += "'logradouro':'" + $('#inputLogradouroEndereco').val() + "',";
            data += "'numero':'" + $('#inputNumeroEndereco').val() + "',";
            data += "'complemento':'" + $('#inputComplementoEndereco').val() + "',";
            data += "'bairro':'" + $('#inputBairroEndereco').val() + "',";
            data += "'cidade':'" + $('#inputCidadeEndereco').val() + "',";
            data += "'estado':'" + $('#inputEstadoEndereco').val() + "'}";

            var result = $.ajax({
                type: 'POST',
                dataType: 'json',
                data: data,
                contentType: 'application/json; charset=utf-8',
                async: false,
                url: ''
            });

            if ((result !== 'undefined') || (result !== null)) {
                $('#tratamentoEndereco').html('').append($.parseJSON(result.responseText).d);
            }
            else {
                limparCamposEnderecoTratamento();
            }
        }
        else {
            var logradouroEndereco = $('#inputLogradouroEndereco').val();
            var cidadeEndereco = $('#inputCidadeEndereco').val();
            var estadoEndereco = $('#inputEstadoEndereco').val();
            var cep = $('#inputCEPEndereco').val();

            if (logradouroEndereco === "" && cidadeEndereco === "" && estadoEndereco === "") {
                if (cep === "") {
                    $('#tratamentoEndereco').html('').append('Campos ' + camposObrigatorios + ' obrigatórios em branco!');
                }
            }

            var camposObrigatorios = [];
            if (logradouroEndereco === '')
                camposObrigatorios.push('Endereço');
            if (cidadeEndereco === '')
                camposObrigatorios.push('Cidade');
            if (estadoEndereco === '') 
                camposObrigatorios.push('Estado');
            //if (cep === '') 
            //    camposObrigatorios.push('Cep');

            if (cep === "") {
                $('#tratamentoEndereco').html('').append('Campos ' + camposObrigatorios + ' ou CEP obrigatórios em branco!');
            }
            else {
                $('#tratamentoEndereco').html('').append('Campos ' + camposObrigatorios + ' obrigatórios em branco!');
            }

        }
    });

    $('#buttonLimparEndereco').click(function () {
        limparCamposEnderecoTratamento();
    });

    ////////////////////////-----------------------
    $('a[id="lnkBtnEnderecos"]').click(function () {
        $('a[id*="lnkBtnMapasEnderecos"]').removeClass('active');
    });

    $('a[id="lnkBtnHistoricoEnderecos"]').click(function () {
        $('a[id*="lnkBtnMapasEnderecos"]').removeClass('active');
    });

    //$('a[id*="lnkBtnMapasEnderecos"]').click(function ()
    //{
    //    $('div[id*="divLocalizacaoEnderecos"]').css('display', 'none');
    //    $('div[id*="DivHistoricoEnderecos"]').css('display', 'none');
    //    $('div[id*="DivMapasEnderecos"]').css('display', 'block');
    //    $('a[id*="lnkBtnEnderecos"]').removeClass('active');
    //    $('a[id*="lnkBtnHistoricoEnderecos"]').removeClass('active');
    //    $('a[id*="lnkBtnMapasEnderecos"]').addClass('active');

    //    var i = 2;
    //    $('table[id*="dgEndereco"] input[name="enderecoCompleto"]').each(function ()
    //    {
    //        if ($(this).val() != '')
    //        {
    //            getLatLong($('input[id*="' + i.toString() + '_HiddenFieldHEndID"]').val(), $(this).val());
    //        }
    //        i++;
    //    });
    //    initialize();
    //    //$('#HiddenEndereco').html('');
    //    //Cobrar Consulta
    //    if ($('input[id*="hdnFieldTipoPessoa"]').val() == 'PF')
    //        RegistrarConsulta('lnkBtnMapasEnderecos', '103', '0.15');
    //    else
    //        RegistrarConsulta('lnkBtnMapasEnderecos', '104', '0.15');
    //});
});

function jsMaps() {
    var tableEnderecos = null;
    var rows = null;
    var i;
    var j;
    var enderecoCompleto = "";
    var hEndId = "";

    $('div[id*="divLocalizacaoEnderecos"]').css('display', 'none');
    $('div[id*="DivHistoricoEnderecos"]').css('display', 'none');
    $('div[id*="DivMapasEnderecos"]').css('display', 'block');
    $('a[id*="lnkBtnEnderecos"]').removeClass('active');
    $('a[id*="lnkBtnHistoricoEnderecos"]').removeClass('active');
    $('a[id*="lnkBtnMapasEnderecos"]').addClass('active');

    //var i = 2;
    //$('table[id*="dgEndereco"] input[name*="HiddenFieldLogradouro"]').each(function () {
    //    if ($(this).val() !== '') {
    //        getLatLong($('input[id*="' + i.toString() + '_HiddenFieldHEndID"]').val(), $(this).val());
    //    }
    //    i++;
    //});

    tableEnderecos = $('table[id*="dgEndereco"]');
    if (tableEnderecos !== null) {
        rows = $(tableEnderecos).find('> tbody > tr');
        if (rows !== null) {
            for (i = 0; i < rows.length; i++) {
                enderecoCompleto = $(rows[i]).find('input[name*="HiddenFieldLogradouro"]').val();
                hEndId = $(rows[i]).find('input[name*="HiddenFieldHEndID"]').val();
                if (enderecoCompleto !== null) {
                    if (hEndId !== null) {
                        if (enderecoCompleto.length > 0 && hEndId.length > 0) {
                            for (j = 1; j <= 15; j++) {
                                enderecoCompleto = enderecoCompleto.replace("-", " ");
                                enderecoCompleto = enderecoCompleto.replace("+", " ");
                                enderecoCompleto = enderecoCompleto.replace("  ", " ");
                                enderecoCompleto = enderecoCompleto.trim();
                            }
                            if (enderecoCompleto.length > 0) {
                                getLatLong(hEndId, enderecoCompleto);
                            }
                        }
                    }
                }
            }
        }
    }

    initializeLocalizacaoNoMapa();

    return false;
}

//function inicializarAbas() {

//    //LimparMensagem
//    $('#divMensagemTelefones').hide();
//    $('#divMensagemEndereco').hide();
//    $('#divMensagemEmail').hide();

//    //VerificarPermissão
//    if (PermissaoParaConsultarRegistro('lnkBtnMaisTelefone') == true)
//        $('#LIMaisTelfone').css('display', 'block');
//    else
//        $('#LIMaisTelfone').css('display', 'none');

//    if (PermissaoParaConsultarRegistro('lnkBtnTelefoneInvalido') == true)
//        $('#LIContatosRuins').css('display', 'block');
//    else
//        $('#LIContatosRuins').css('display', 'none');

//    if (PermissaoParaConsultarRegistro('lnkBtnMapasEnderecos') == true)
//        $('#LIMapasEnderecos').css('display', 'block');
//    else
//        $('#LIMapasEnderecos').css('display', 'none');

//    if (PermissaoParaConsultarRegistro('lnkBtnHistoricoEnderecos') == true)
//        $('#LIHistoricoEnderecos').css('display', 'block');
//    else
//        $('#LIHistoricoEnderecos').css('display', 'none');

//    if (PermissaoParaConsultarRegistro('lnkBtnHistoricoEmails') == true)
//        $('#LIHistoricoEmail').css('display', 'block');
//    else
//        $('#LIHistoricoEmail').css('display', 'none');
//}


function getLatLong(hEndId, address) {
    var i;
    var url;

    for (i = 1; i <= 20; i++) {
        address = address.replace(" ", "+");
    }

    url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "-brasil&sensor=true&key=" + YOUR_API_KEY_GoogleMaps;

    $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.status === 'OK') {
                $('#HiddenEndereco').append(response.results[0].geometry.location.lat + "|" +
                    response.results[0].geometry.location.lng + "|" +
                    response.results[0].address_components[0].long_name + "||" +
                    response.results[0].formatted_address + '#');
                InsertJSONMaps(hEndId, response);
            }
        }
    });
}

function InsertJSONMaps(hEndId, response) {
    var result = $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: "{'hEndId':'" + hEndId
            + "','latitude':'" + response.results[0].geometry.location.lat
            + "','longitude':'" + response.results[0].geometry.location.lng
            + "','endereco':'" + response.results[0].formatted_address
            + "','results':'" + JSON.stringify(response.results)
            + "','status':'" + response.status + "'}",
        async: false,
        url: 'Home.aspx/InsertJSONMaps'
    });
    if (result !== undefined)
        $('div[id*="divMensagem"]').hide();
    else
        $('div[id*="divMensagem"]').show();
}

function RegistrarConsulta(nomeControle, enumTipoConsulta, valorConsulta) {
    var result = $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: "{'nomeControle':'" + nomeControle + "',"
            + "'enumTipoConsulta':'" + enumTipoConsulta + "',"
            + "'valorConsulta':'" + valorConsulta + "'}",
        async: false,
        url: 'Home.aspx/RegistrarConsultaJSON'
    });
}

function ConsultarAbas(nomeControle, enumTipoConsulta) {
    var result = $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: "{'nomeControle':'" + nomeControle + "',"
            + "'enumTipoConsulta':'" + enumTipoConsulta + "'}",
        async: false,
        url: 'Home.aspx/ConsultarAbas'
    });
}

function carregarQtdMaisTelefones() {
    var result = $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        async: false,
        url: 'Home.aspx/CarregarQtdMaisTelefones',
        success: function (result) {
            if (result !== '') {
                $('#lnkBtnMaisTelefone').html('').append(result.d);
            }
        }
    });
}

function PermissaoParaConsultarRegistro(nomeControle) {
    var retorno = false;
    var result = $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: "{'nomeControle':'" + nomeControle + "'}",
        async: false,
        url: 'Home.aspx/PermissaoParaConsultarRegistro',
        success: function (result) {
            if (result.d !== '') {
                $('input[id*="lblMsgValidacao"]').val(result.d);
                $('div[id*="pnlMsg"]').show();
                $('div[id*="mpeMsg"]').show();
                retorno = false;
            }
            else
                retorno = true;
        }
    });
    return retorno;
}

function DesmarcarOpcoes(valor) {
    var radios = $("[name=radio]").children("input:radio");
    radios.each(function (i, e) {
        if (e.checked && valor !== e.parentNode.parentNode.innerText) {
            e.checked = false;
        }
    });
}

function OcultarTodasConsultas() {
    $("#ctl00_ContentPlaceHolder1_divInfo").hide();
    $("#ctl00_ContentPlaceHolder1_DivParticipEmpresarial").hide();
    $("#ctl00_ContentPlaceHolder1_DivuDataPrev").hide();
    $("#ctl00_ContentPlaceHolder1_DivObito").hide();
    $("#ctl00_ContentPlaceHolder1_DivSociodemografico").hide();
    $("#ctl00_ContentPlaceHolder1_DivVizinhos").hide();
    $("#ctl00_ContentPlaceHolder1_DivCCF").hide();
    $("#ctl00_ContentPlaceHolder1_DivPfPjRelacionadas").hide();
    $("#ctl00_ContentPlaceHolder1_ContatoInvalido").hide();
    $("#ctl00_ContentPlaceHolder1_TelRelacionados").hide();
    $("#ctl00_ContentPlaceHolder1_DivPerfilConsumo").hide();
    $("#ctl00_ContentPlaceHolder1_DivVeiculos").hide();
    $("#ctl00_ContentPlaceHolder1_DivDgConsulta").hide();
    $("#ctl00_ContentPlaceHolder1_DivInadimplencia").hide();
    $("#ctl00_ContentPlaceHolder1_DivSituacaoCadastral").hide();
    $("#ctl00_ContentPlaceHolder1_DivConsultou").hide();
    $("#ctl00_ContentPlaceHolder1_DivFacebook").hide();
    $("#ctl00_ContentPlaceHolder1_divRestituicaoIR").hide();
    $("#ctl00_ContentPlaceHolder1_DivConsultaDocumentos").hide();
    $('#ctl00_ContentPlaceHolder1_DivConsultaBolsaFamilia').hide();
    $('#ctl00_ContentPlaceHolder1_DivConsultaPlanoSaude').hide();
    $('#ctl00_ContentPlaceHolder1_DivSeguroDesemprego').hide();
    $('#ctl00_ContentPlaceHolder1_DivTomadoresDecisao').hide();
    $('#ctl00_ContentPlaceHolder1_DivConsultaVeicular').hide();
    $('#ctl00_ContentPlaceHolder1_divConsultaLocalizacaoMaeTelefones').hide();
    $('#ctl00_ContentPlaceHolder1_DivConsultaHisconInss').hide();
    $('#ctl00_ContentPlaceHolder1_DivSgdConsultaVeicular').hide();
    $('#ctl00_ContentPlaceHolder1_DivSgdConsultaVeicularDetalhada').hide();
    $('#ctl00_ContentPlaceHolder1_DivCnh').hide();
    $('#ctl00_ContentPlaceHolder1_divScoreCreditoRecorrenteSW').hide();
    $('#ctl00_ContentPlaceHolder1_divScoreCreditoEventualSW').hide();
}

function AbrirEnquete() {
    var enq;
    enq = $('#ctl00_ContentPlaceHolder1_Enquete').val();
    if (enq === 'True') {
        $find("ctl00_ContentPlaceHolder1_mpeEnquete").show();
        $('#ctl00_ContentPlaceHolder1_Enquete').val('Stop');
    }
}
//});

function carregarModalEnderecoTelefone() {
    $('a[id*="enderecoDoTelefone"]').off();
    $('a[id*="enderecoDoTelefone"]').click(function () {
        $('#divEnderecoTelefone').removeClass();
        $('#divEnderecoTelefone').addClass('modalEnderecoPorTelefone');
        $('#divEnderecoTelefone').show();
        $('#divMask').show();
        $('#spanEnderecoTelefone').html('Endereço do Telefone');
        var result = $.ajax({
            type: 'POST',
            dataType: 'json',
            data: "{'hEndId' : '" + $(this).data('id') + "'}",
            contentType: 'application/json; charset=utf-8',
            async: false,
            url: 'Home.aspx/getEnderecoDoTelefone'
        });
        if ((result !== 'undefined') || (result !== null)) {
            $('#theadEnderecoTelefone').html('').append($.parseJSON(result.responseText).d.split('|')[0]);
            $('#tbodyEnderecoTelefone').html('').append($.parseJSON(result.responseText).d.split('|')[1]);
            carregarLinkEnderecoDoTelefone();
        }
    });
    $('a[id*="telefoneDoEndereco"]').off();
    $('a[id*="telefoneDoEndereco"]').click(function () {
        $('#divEnderecoTelefone').removeClass();
        $('#divEnderecoTelefone').addClass('modalTelefonePorEndereco');
        $('#divEnderecoTelefone').show();
        $('#divMask').show();
        $('#spanEnderecoTelefone').html('Telefones registrados neste Endereço');
        var result = $.ajax({
            type: 'POST',
            dataType: 'json',
            data: "{'hEndId' : '" + $(this).data('id') + "'}",
            contentType: 'application/json; charset=utf-8',
            async: false,
            url: 'Home.aspx/getTelefonesDoEndereco'
        });
        if ((result !== 'undefined') || (result !== null)) {
            $('#theadEnderecoTelefone').html('').append($.parseJSON(result.responseText).d.split('|')[0]);
            $('#tbodyEnderecoTelefone').html('').append($.parseJSON(result.responseText).d.split('|')[1]);
            carregarLinkEnderecoDoTelefone();
        }
    });

    $('#closeModalEnderecoTelefone').click(function () {
        $('#divEnderecoTelefone').hide();
        $('#divMask').hide();
    });
}

function carregarLinkEnderecoDoTelefone() {
    $('a[id*="aEnderecoDoTelefone"]').off();
    $('a[id*="aEnderecoDoTelefone"]').click(function () {
        $('#divEnderecoTelefone').removeClass();
        $('#divEnderecoTelefone').addClass('modalTelefonePorEndereco');
        $('#divEnderecoTelefone').show();
        $('#divMask').show();
        $('#spanEnderecoTelefone').html('Pessoas \\ Empresas relacionadas ao Endereço');
        var result = $.ajax({
            type: 'POST',
            dataType: 'json',
            data: "{'enderecoCompleto' : '" + $(this).data('id') + "'}",
            contentType: 'application/json; charset=utf-8',
            async: false,
            url: 'Home.aspx/getPessoasEnderecoDoTelefone'
        });
        if ((result !== 'undefined') || (result !== null)) {
            $('#theadEnderecoTelefone').html('').append($.parseJSON(result.responseText).d.split('|')[0]);
            $('#tbodyEnderecoTelefone').html('').append($.parseJSON(result.responseText).d.split('|')[1]);
            carregarLinksDocumento();
        }
    });

    $('a[id*="aTelefoneDoEndereco"]').click(function () {
        $('#divEnderecoTelefone').removeClass();
        $('#divEnderecoTelefone').addClass('modalTelefonePorEndereco');
        $('#divEnderecoTelefone').show();
        $('#divMask').show();
        $('#spanEnderecoTelefone').html('Pessoas \\ Empresas relacionadas ao Telefone');
        var result = $.ajax({
            type: 'POST',
            dataType: 'json',
            data: "{'dddTelefone' : '" + $(this).data('id') + "'}",
            contentType: 'application/json; charset=utf-8',
            async: false,
            url: 'Home.aspx/getPessoaTelefoneDoEndereco'
        });
        if ((result !== 'undefined') || (result !== null)) {
            $('#theadEnderecoTelefone').html('').append($.parseJSON(result.responseText).d.split('|')[0]);
            $('#tbodyEnderecoTelefone').html('').append($.parseJSON(result.responseText).d.split('|')[1]);
            carregarLinksDocumento();
        }
    });
}

function carregarAssinanteDoTelefone() {
    $('a[id*="assinanteDoTelefone"]').off();
    $('a[id*="assinanteDoTelefone"]').click(function () {
        $('#divEnderecoTelefone').removeClass();
        $('#divEnderecoTelefone').addClass('modalTelefonePorEndereco');
        $('#divEnderecoTelefone').show();
        $('#divMask').show();
        $('#spanEnderecoTelefone').html('Assinante do Telefone: ' + $(this).data('id').toString());

        var dddTelefone = $(this).data('id').toString();
        var result = $.ajax({
            type: 'POST',
            dataType: 'json',
            data: "{'dddTelefone' : '" + dddTelefone + "'}",
            contentType: 'application/json; charset=utf-8',
            async: false,
            url: 'Home.aspx/getAssinanteDoTelefone'
        });
        if ((result !== 'undefined') || (result !== null)) {
            $('#theadEnderecoTelefone').html('').append($.parseJSON(result.responseText).d.split('|')[0]);
            $('#tbodyEnderecoTelefone').html('').append($.parseJSON(result.responseText).d.split('|')[1]);
            carregarLinksDocumento();
        }
    });

    $('#closeModalEnderecoTelefone').click(function () {
        $('#divEnderecoTelefone').hide();
        $('#divMask').hide();
    });
}

function carregarLinksDocumento() {
    $('a[id*="aAssinanteDoTelefoneDocumento"], a[id*="aPessoaTelefoneDoEnderecoDocumento"], a[id*="aPessoaTelefoneDoEnderecoDocumento"]').click(function () {
        $('#divEnderecoTelefone').hide();
        $('#divMask').hide();
        $('#ctl00_ContentPlaceHolder1_txtPesqCpfCnpj').val($(this).data("id").toString());
        $('#ctl00_ContentPlaceHolder1_btnNovaConsulta').click();
    });
}

function carregarQtdQuemConsultou() {
    var result = $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        async: false,
        url: 'Home.aspx/getQtdQuemConsultou'
    });
    if ((result !== 'undefined') || (result !== null)) {
        $('#linkQtdQuemConsultou').html('').append($.parseJSON(result.responseText).d);
    }
}

function carregarConfigTratamento() {
    var result = $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        async: false,
        url: 'Home.aspx/getConfigTratamento'
    });
    if ((result !== 'undefined') || (result !== null)) {
        $('#rbtCaracteresMaiusculas').prop('checked', false);
        $('#rbtCaracteresMinusculas').prop('checked', false);
        $('#rbtCaracteresIniciaisMaiusculas').prop('checked', false);
        $('#rbtAcentuarNomeSim').prop('checked', false);
        $('#rbtAcentuarNomeNao').prop('checked', false);
        $('#rbtAbreviarEnderecoSim').prop('checked', false);
        $('#rbtAbreviarEnderecoNao').prop('checked', false);
        $('#rbtRecuperarCEPSim').prop('checked', false);
        $('#rbtRecuperarCEPNao').prop('checked', false);
        $('#rbtExplodirEnderecoSim').prop('checked', false);
        $('#rbtExplodirEnderecoNao').prop('checked', false);
        $('#rbtGerarMatchCodeSim').prop('checked', false);
        $('#rbtGerarMatchCodeNao').prop('checked', false);

        if ($.parseJSON(result.responseText).d.split('|')[0] === '1')
            $('#rbtCaracteresMaiusculas').prop('checked', true);
        else if ($.parseJSON(result.responseText).d.split('|')[0] === '2')
            $('#rbtCaracteresMinusculas').prop('checked', true);
        else if ($.parseJSON(result.responseText).d.split('|')[0] === '3')
            $('#rbtCaracteresIniciaisMaiusculas').prop('checked', true);

        if ($.parseJSON(result.responseText).d.split('|')[1] === '1')
            $('#rbtAcentuarNomeSim').prop('checked', true);
        else
            $('#rbtAcentuarNomeNao').prop('checked', true);

        if ($.parseJSON(result.responseText).d.split('|')[2] === '1')
            $('#rbtAbreviarEnderecoSim').prop('checked', true);
        else
            $('#rbtAbreviarEnderecoNao').prop('checked', true);

        if ($.parseJSON(result.responseText).d.split('|')[3] === '1')
            $('#rbtRecuperarCEPSim').prop('checked', true);
        else
            $('#rbtRecuperarCEPNao').prop('checked', true);

        if ($.parseJSON(result.responseText).d.split('|')[4] === '1')
            $('#rbtExplodirEnderecoSim').prop('checked', true);
        else
            $('#rbtExplodirEnderecoNao').prop('checked', true);

        if ($.parseJSON(result.responseText).d.split('|')[5] === '1')
            $('#rbtGerarMatchCodeSim').prop('checked', true);
        else
            $('#rbtGerarMatchCodeNao').prop('checked', true);
    }
}

function carregarCamposTratarDados(checkbox) {
    $(".localizacao_group").hide();

    if ($(checkbox).data('id').toString() === '1') {
        $(".tratamento-result, .endereco-tratamento").show();
        $(".pessoas-tratamento, .box-busca, .actual-search, .tab_recursos").hide();
        $(".tipo-tratamento").text('Endereço');
        $('form').attr('onkeypress', "javascript:return WebForm_FireDefaultButton(event, 'buttonTratarEndereco')");
        limparCamposEnderecoTratamento();
    }
    else {
        $(".tratamento-result, .pessoas-tratamento").show();
        $(".endereco-tratamento, .box-busca, .actual-search, .tab_recursos").hide();
        $(".tipo-tratamento").text('Pessoa');
        $('form').attr('onkeypress', "javascript:return WebForm_FireDefaultButton(event, 'buttonTratarPessoas')");
        limparCamposPessoaTratamento();
    }
}

function limparCamposPessoaTratamento() {
    $('#inputNomePessoa').val('');
    var result = $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        async: false,
        url: 'Home.aspx/limparDadosPessoa'
    });
    if ((result !== 'undefined') || (result !== null)) {
        $('#tratamentoPessoa').html('').append($.parseJSON(result.responseText).d);
    }
    else
        $('#tratamentoPessoa').html('');
}

function limparCamposEnderecoTratamento() {
    $('#inputCEPEndereco').val('');
    $('#inputLogradouroEndereco').val('');
    $('#inputNumeroEndereco').val('');
    $('#inputComplementoEndereco').val('');
    $('#inputBairroEndereco').val('');
    $('#inputCidadeEndereco').val('');
    $('#inputEstadoEndereco').val('');
    var result = $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        async: false,
        url: 'Home.aspx/limparDadosEndereco'
    });
    if ((result !== 'undefined') || (result !== null)) {
        $('#tratamentoEndereco').html('').append($.parseJSON(result.responseText).d);
    }
    else
        $('#tratamentoEndereco').html('');
}

function consultarDadosDocumentos() {
    OcultarTodasConsultas();
    $("#ctl00_ContentPlaceHolder1_DivConsultaDocumentos").show();
    var parameters = { acao: "exibir" };
    //var ret = GetAjax("/GenericHandler/DadosDocumentoAjax.ashx", parameters, "DivConsultaDocumentosConteudo", exibirDadosDocumentos);
    var url = location.href.substring(0, location.href.lastIndexOf("/")) + "/GenericHandler/DadosDocumentoAjax.ashx";
    //var ret = GetAjax("/GenericHandler/DadosDocumentoAjax.ashx", parameters, "ctl00_ContentPlaceHolder1_ltrResultadoConsultaDocumentos", exibirDadosDocumentos);
    var ret = GetAjax(url, parameters, "ctl00_ContentPlaceHolder1_ltrResultadoConsultaDocumentos", exibirDadosDocumentos);
    return false;
}

function consultarBolsaFamilia() {
    //$('#ctl00_ContentPlaceHolder1_DivObito').css('display', 'none');
    OcultarTodasConsultas();
    $("#ctl00_ContentPlaceHolder1_DivConsultaBolsaFamilia").show();
    var parameters = { acao: "exibir" };
    var url = location.href.substring(0, location.href.lastIndexOf("/")) + "/GenericHandler/DadosBolsaFamiliaAjax.ashx";
    var ret = GetAjax(url, parameters, "ctl00_ContentPlaceHolder1_ltrResultadoBolsaFamilia", exibirDadosConsultaBolsaFamilia);
    return false;
}

function consultarPlanoSaude() {
    //parametros
    var _CPF = $('#ctl00_ContentPlaceHolder1_txtCpf').val();
    var _Nome = $('#ctl00_ContentPlaceHolder1_txtNome').val();
    var _Data = $('#ctl00_ContentPlaceHolder1_txtDataNascimento').val().substring(0, 10);
    var _Mae = $('#ctl00_ContentPlaceHolder1_txtNomeMae').val();

    OcultarTodasConsultas();
    $("#ctl00_ContentPlaceHolder1_DivConsultaPlanoSaude").show();

    var parameters = { acao: "exibir", CPF: _CPF, Nome: _Nome, Data: _Data, Mae: _Mae };
    var url = location.href.substring(0, location.href.lastIndexOf("/")) + "/GenericHandler/DadosPlanoSaudeAjax.ashx";
    var ret = GetAjax(url, parameters, "ctl00_ContentPlaceHolder1_ltrResultadoPlanoSaude", exibirDadosConsultaPlanoSaude);

    return false;
}

function consultarSeguroDesemprego() {
    //parametros
    var _CPF = $('#ctl00_ContentPlaceHolder1_txtCpf').val();

    OcultarTodasConsultas();
    $("#ctl00_ContentPlaceHolder1_DivSeguroDesemprego").show();

    var parameters = { acao: "exibir", CPF: _CPF };
    var url = location.href.substring(0, location.href.lastIndexOf("/")) + "/GenericHandler/SeguroDesempregoAjax.ashx";
    var ret = GetAjax(url, parameters, "ctl00_ContentPlaceHolder1_ltrResultadoSeguroDesemprego", exibirDadosConsultaSeguroDesemprego);

    return false;
}

function consultarTomadoresDecisao() {
    OcultarTodasConsultas();
    $("#ctl00_ContentPlaceHolder1_DivTomadoresDecisao").show();

    var parameters = { acao: "exibir" };
    var url = location.href.substring(0, location.href.lastIndexOf("/")) + "/GenericHandler/TomadoresDecisaoAjax.ashx";
    var ret = GetAjax(url, parameters, "ctl00_ContentPlaceHolder1_ltrResultadoTomadoresDecisao", exibirDadosConsultaTomadoresDecisao);

    return false;
}

function exibirDadosDocumentos() {
    $("#ctl00_ContentPlaceHolder1_liConsultaDocs").css("display", "inline");
    return false;
}

function exibirDadosConsultaBolsaFamilia() {
    $("#ctl00_ContentPlaceHolder1_liConsultaBolsaFamilia").css("display", "inline");
    return false;
}

function exibirDadosConsultaPlanoSaude() {
    $("#ctl00_ContentPlaceHolder1_liConsultaPlanoSaude").css("display", "inline");
    return false;
}

function exibirDadosConsultaSeguroDesemprego() {
    $("#ctl00_ContentPlaceHolder1_liConsultaSeguroDesemprego").css("display", "inline");
    return false;
}

function exibirDadosConsultaTomadoresDecisao() {
    $("#ctl00_ContentPlaceHolder1_liConsultaTomadoresDecisao").css("display", "inline");
    return false;
}

function jsEnviarSender() {
    $('#ctl00_ContentPlaceHolder1_divMensagemValidacaoSender').html('');
    $('#ctl00_ContentPlaceHolder1_divMensagemValidacaoSender').hide();

    var selected = [];
    var ddl;
    var txt;

    $('#gridSenderSms input:checked').each(function () {
        selected.push($(this).closest("td").find("label").html());
    });

    ddl = $('#ctl00_ContentPlaceHolder1_ddlMensagemPadraoCliente').val();

    if (selected === null || selected.length === 0 || ddl === null || ddl === "0" || ddl === "") {
        $('#ctl00_ContentPlaceHolder1_divMensagemValidacaoSender').html('Selecione ao menos um telefone e uma mensagem para realizar o envio');
        $('#ctl00_ContentPlaceHolder1_divMensagemValidacaoSender').show();
        return false;
    }

    var parameters = { idmensagem: ddl, listatelefone: selected };
    var retorno = PostAjaxValue("Home.aspx/enviarMensagemSender", JSON.stringify(parameters));

    switch (retorno) {
        case "0":
            abrirModalAtualizarSaldo('A mensagem foi enviada para o UnitSender com sucesso!');
            $('html, body').animate({ scrollTop: 0 }, 1000);
            break;
        case "-1":
            abrirModalAtualizarSaldo('Ocorreu um erro duranto o processamento de sua requisição');
            break;
        case "-2":
            abrirModalAtualizarSaldo('Saldo insuficiente para realizar a operação');
            break;
        default:
            abrirModalAtualizarSaldo('Ocorreu um erro duranto o processamento de sua requisição');
            break;
    }
    return false;
}

function exibirMensagemSender(idmensagem) {
    if (idmensagem !== "") {
        var retorno = PostAjaxValue("Home.aspx/obterMensagemSender", "{'idmensagem':'" + idmensagem + "'}");
        $("#ctl00_ContentPlaceHolder1_txtSmsSender").text(retorno);
    }
    else
        $("#ctl00_ContentPlaceHolder1_txtSmsSender").text("");
}

function GetAjax(url, parameters, display, delegate) {
    $.ajax({
        type: 'GET',
        url: url,
        data: parameters,
        //async: false,
        beforeSend: function () {
            abrirModalAguarde();
        },
        success: function (response) {
            fecharModalAguarde();
            if (display !== null)
                $('#' + display).html(response);

            if (delegate !== null) {
                delegate();
                return false;
            }
        },
        failure: function (erro) {
            fecharModalAguarde();
            alert(erro);
        }
    });

    return false;
}

function PostAjaxValue(url, parameters) {
    var retorno =
        $.ajax({
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            url: url,
            data: parameters,
            async: false,
            beforeSend: function () {

            },
            success: function (response) {
                //retorno = response;
            },
            failure: function (erro) {
                alert(erro);
            }
        });
    if (retorno !== null && retorno !== 'undefined')
        return $.parseJSON(retorno.responseText).d;
}

//Mais info endereço
function maisInfoEndereco(cep) {
    //logradouro, cidade, uf
    $('#divEnderecoInfo').removeClass();
    $('#divEnderecoInfo').addClass('modalTelefonePorEndereco');
    $('#divEnderecoInfo').show();
    $('#divMaskInfo').show();
    $('#spanEnderecoTelefone').html('Telefones registrados neste Endereço');

    var data = "{'CEP':'" + cep.toString() + "'}";
    //data += "'LOGRADOURO':'" + logradouro.toString() + "',";
    //data += "'CIDADE':'" + cidade.toString() + "',";
    //data += "'UF':'" + uf.toString() + "'}";

    var result = $.ajax({
        type: 'POST',
        dataType: 'json',
        data: data,
        contentType: 'application/json; charset=utf-8',
        async: false,
        url: 'Home.aspx/getMaisInfoEndereco'
    });

    if ((result !== 'undefined') || (result !== null)) {
        $('#theadEnderecoInfo').html('').append($.parseJSON(result.responseText).d.split('|')[0]);
        $('#tbodyEnderecoInfo').html('').append($.parseJSON(result.responseText).d.split('|')[1]);
    }
}

function fecharMaisInfoEndereco() {
    $('#divEnderecoInfo').hide();
    $('#divMaskInfo').hide();
}

function ConsultaDocumento(doc) {
    $('#ctl00_ContentPlaceHolder1_txtPesqCpfCnpj').val(doc.toString());
    $('#ctl00_ContentPlaceHolder1_btnNovaConsulta').click();
}

function SimularEmprestimo(valorMargem, coeficiente) {
    $("#valEmpLabel").css("display", "block");
    $("#resultadoSimuladoLabel").css("display", "block");
    var calculo = parseFloat(valorMargem.replace(".", "").replace(",", ".")) / parseFloat(coeficiente.replace(",", "."));

    if (calculo.toString() !== "Infinity" && calculo.toString() !== "NaN") {
        $("#resultadoSimuladoLabel").val("R$ " + calculo.toFixed(2).toString().replace(".", ","));
    }
    else {
        $("#resultadoSimuladoLabel").val("R$ " + "0,00");
    }
}

function GetFilasUnitmailing() {
    var parameters = {};
    var url = location.href.substring(0, location.href.lastIndexOf("/")) + "/GenericHandler/GetArquivosUnitmailing.ashx";

    var ret = GetAjax(url, parameters, "ListArqUnitmailing", null);
}

function CriarFilaArquivosUnitmailing() {

}

function btnProximoClick() {
    var idFila = $('input[id*="hdnFieldIdFilaUnitmailing"]').val();
    var url = location.href.substring(0, location.href.lastIndexOf("/")) + "/GenericHandler/GetArquivosUnitmailing.ashx";
    var parametros = { IdFila: idFila };
    $.ajax({
        type: 'POST',
        url: url,
        data: parametros,
        beforeSend: function () {
            abrirModalAguarde();
        },
        success: function (data) {
            if (data.length > 1) {
                $('input[id*="hdnFieldPesquisa"]').val('POR_UNITMAILING_CPF');
                $("#ctl00_ContentPlaceHolder1_txtUnitmailing").val(data);
                //$("#ctl00_ContentPlaceHolder1_txtPesqCpfCnpj").val(data);
                $("#ctl00_ContentPlaceHolder1_btnNovaConsulta").click();
            }
            else {
                alert("Não há mais documentos na fila.");
                fecharModalAguarde();
            }
        }
    });
}
function btnResetarFilaClick(sender, idFila) {
    var url = location.href.substring(0, location.href.lastIndexOf("/")) + "/GenericHandler/GetArquivosUnitmailing.ashx";
    var parametros = { ResetarFila: idFila };
    $.ajax({
        type: 'POST',
        url: url,
        data: parametros,
        beforeSend: function () {
            abrirModalAguarde();
        },
        success: function (data) {
            if (data.length > 0) {
                $(sender).parent().html(data);
            }
            fecharModalAguarde();
        },
        error: function () {
            fecharModalAguarde();
        }
    });
}

function CheckCamposPesquisa() {
    var tipoConsulta = $('input[id*="hdnFieldPesquisa"]').val();
    var retorno = true;
    if (tipoConsulta === "POR_CPF") {
        if ($("#ctl00_ContentPlaceHolder1_txtPesqCpfCnpj").val().length <= 0)
            retorno = false;
    }
    else if (tipoConsulta === "POR_TELEFONE") {
        if ($("#ctl00_ContentPlaceHolder1_txtPesqDdd").val().length <= 0 && $("#ctl00_ContentPlaceHolder1_txtPesqTelefone").val().length <= 0)
            retorno = false;
    }
    else if (tipoConsulta === "POR_NOME") {
        if ($("#ctl00_ContentPlaceHolder1_txtPesqNome").val().length <= 0)
            retorno = false;
    }
    else if (tipoConsulta === "POR_ENDERECO") {
        if ($("#ctl00_ContentPlaceHolder1_txtPesqLogradouro").val().length <= 0)
            retorno = false;
    }
    else if (tipoConsulta === "POR_CEP") {
        if ($("#ctl00_ContentPlaceHolder1_txtPesqCep").val().length <= 0)
            retorno = false;
    }
    else if (tipoConsulta === "POR_EMAIL") {
        if ($("#ctl00_ContentPlaceHolder1_txtPesqEmail").val().length <= 0)
            retorno = false;
    }
    else if (tipoConsulta === "POR_BENEFICIO") {
        if ($("#ctl00_ContentPlaceHolder1_txtOutroBeneficio").val().length <= 0)
            retorno = false;
    }
    else if (tipoConsulta === "POR_DOCUMENTO_TELEFONES") {
        if ($("#ctl00_ContentPlaceHolder1_txtPesqPessoaMaeDocumento").val().length <= 0)
            retorno = false;
    }
    else if (tipoConsulta === "POR_VEICULO") {
        if ($("#ctl00_ContentPlaceHolder1_txtPesqPlaca").val().length <= 0)
            retorno = false;
    }
    return retorno;
}

function ExibirCamposConsultaVeicularDetalhada() {
    $('input[id*="hdnFldConsultasAvancadas"]').val('1');
    setConsultasAvancadas('veiculos');
    verificarConsultaPor();
    $('html, body').animate({ scrollTop: 0 }, 'fast');

    return false;
}

function ConsultarDocumentoViaJavaScript(documento) {
    var url = 'Home.aspx/setSessionbtnNovaConsulta';
    var dados = {};
    var element = document.getElementById("ctl00_ContentPlaceHolder1_rbtLocalizacao");
    if (element !== null) {
        element.checked = true;
    }
    $('input[id*="hdnFieldPesquisa"]').val('POR_CPF');

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: dados,
        contentType: 'application/json; charset=utf-8',
        async: false,
        success: function () {
            $('#ctl00_ContentPlaceHolder1_txtPesqCpfCnpj').val(documento);
            $('#ctl00_ContentPlaceHolder1_btnNovaConsulta').click();
        }
    });
}

function dgTelefoneFixoUp(telefone) {
    var posicaoX = 0;
    var posicaoY = 0;
    var url = 'Home.aspx/dgTelefoneFixoUp';

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: "{'telefone':'" + telefone + "'}",
        contentType: 'application/json; charset=utf-8',
        async: false,
        success: function () {
            __doPostBack('TelefoneAdicionadoPeloUsuario', 'TelefoneAdicionadoPeloUsuario');

            //var element = document.getElementById('ctl00_ContentPlaceHolder1_dgTelefoneFixo');
            //if (element !== null) {
            //    var rect = element.getBoundingClientRect();
            //    posicaoX = rect.left;
            //    posicaoY = rect.top;
            //}
            //window.scrollTo(posicaoX, posicaoY);
        }
    });
}

function dgTelefoneFixoDown(telefone) {
    var posicaoX = 0;
    var posicaoY = 0;
    var url = 'Home.aspx/dgTelefoneFixoDown';

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: "{'telefone':'" + telefone + "'}",
        contentType: 'application/json; charset=utf-8',
        async: false,
        success: function () {
            __doPostBack('TelefoneAdicionadoPeloUsuario', 'TelefoneAdicionadoPeloUsuario');

            //var element = document.getElementById('ctl00_ContentPlaceHolder1_dgTelefoneFixo');
            //if (element !== null) {
            //    var rect = element.getBoundingClientRect();
            //    posicaoX = rect.left;
            //    posicaoY = rect.top;
            //}
            //window.scrollTo(posicaoX, posicaoY);
        }
    });
}

function dgTelefoneCelularUp(telefone) {
    var posicaoX = 0;
    var posicaoY = 0;
    var url = 'Home.aspx/dgTelefoneCelularUp';

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: "{'telefone':'" + telefone + "'}",
        contentType: 'application/json; charset=utf-8',
        async: false,
        success: function () {
            __doPostBack('TelefoneAdicionadoPeloUsuario', 'TelefoneAdicionadoPeloUsuario');

            //var element = document.getElementById('ctl00_ContentPlaceHolder1_dgTelefoneCelular');
            //if (element !== null) {
            //    var rect = element.getBoundingClientRect();
            //    posicaoX = rect.left;
            //    posicaoY = rect.top;
            //}
            //window.scrollTo(posicaoX, posicaoY);
        }
    });
}

function dgTelefoneCelularDown(telefone) {
    var posicaoX = 0;
    var posicaoY = 0;
    var url = 'Home.aspx/dgTelefoneCelularDown';

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: "{'telefone':'" + telefone + "'}",
        contentType: 'application/json; charset=utf-8',
        async: false,
        success: function () {
            __doPostBack('TelefoneAdicionadoPeloUsuario', 'TelefoneAdicionadoPeloUsuario');

            //var element = document.getElementById('ctl00_ContentPlaceHolder1_dgTelefoneCelular');
            //if (element !== null) {
            //    var rect = element.getBoundingClientRect();
            //    posicaoX = rect.left;
            //    posicaoY = rect.top;
            //}
            //window.scrollTo(posicaoX, posicaoY);
        }
    });
}

function dgEnderecoUp(logradouro, numero, complemento, bairro, cidade, uf, cep, hEndID, origem) {
    var posicaoX = 0;
    var posicaoY = 0;
    var url = 'Home.aspx/dgEnderecoUp';
    var dados = {};

    dados.logradouro = logradouro;
    dados.numero = numero;
    dados.complemento = complemento;
    dados.bairro = bairro;
    dados.cidade = cidade;
    dados.uf = uf;
    dados.cep = cep;
    dados.hEndID = hEndID;
    dados.origem = origem;

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(dados),
        contentType: 'application/json; charset=utf-8',
        async: false,
        success: function () {
            __doPostBack('TelefoneAdicionadoPeloUsuario', 'TelefoneAdicionadoPeloUsuario');

            //var element = document.getElementById('ctl00_ContentPlaceHolder1_dgEndereco');
            //if (element !== null) {
            //    var rect = element.getBoundingClientRect();
            //    posicaoX = rect.left;
            //    posicaoY = rect.top;
            //}
            //window.scrollTo(posicaoX, posicaoY);
        }
    });
}

function dgEnderecoDown(logradouro, numero, complemento, bairro, cidade, uf, cep, hEndID, origem) {
    var posicaoX = 0;
    var posicaoY = 0;
    var url = 'Home.aspx/dgEnderecoDown';
    var dados = {};

    dados.logradouro = logradouro;
    dados.numero = numero;
    dados.complemento = complemento;
    dados.bairro = bairro;
    dados.cidade = cidade;
    dados.uf = uf;
    dados.cep = cep;
    dados.hEndID = hEndID;
    dados.origem = origem;

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(dados),
        contentType: 'application/json; charset=utf-8',
        async: false,
        success: function () {
            __doPostBack('TelefoneAdicionadoPeloUsuario', 'TelefoneAdicionadoPeloUsuario');

            //var element = document.getElementById('ctl00_ContentPlaceHolder1_dgEndereco');
            //if (element !== null) {
            //    var rect = element.getBoundingClientRect();
            //    posicaoX = rect.left;
            //    posicaoY = rect.top;
            //}
            //window.scrollTo(posicaoX, posicaoY);
        }
    });
}

function dgEmailUp(email) {
    var posicaoX = 0;
    var posicaoY = 0;
    var url = 'Home.aspx/dgEmailUp';
    var dados = {};

    dados.email = email;

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(dados),
        contentType: 'application/json; charset=utf-8',
        async: false,
        success: function () {
            __doPostBack('TelefoneAdicionadoPeloUsuario', 'TelefoneAdicionadoPeloUsuario');

            //var element = document.getElementById('ctl00_ContentPlaceHolder1_dgEmail');
            //if (element !== null) {
            //    var rect = element.getBoundingClientRect();
            //    posicaoX = rect.left;
            //    posicaoY = rect.top;
            //}
            //window.scrollTo(posicaoX, posicaoY);
        }
    });
}

function dgEmailDown(email) {
    var posicaoX = 0;
    var posicaoY = 0;
    var url = 'Home.aspx/dgEmailDown';
    var dados = {};

    dados.email = email;

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(dados),
        contentType: 'application/json; charset=utf-8',
        async: false,
        success: function () {
            __doPostBack('TelefoneAdicionadoPeloUsuario', 'TelefoneAdicionadoPeloUsuario');

            //var element = document.getElementById('ctl00_ContentPlaceHolder1_dgEmail');
            //if (element !== null) {
            //    var rect = element.getBoundingClientRect();
            //    posicaoX = rect.left;
            //    posicaoY = rect.top;
            //}
            //window.scrollTo(posicaoX, posicaoY);
        }
    });
}