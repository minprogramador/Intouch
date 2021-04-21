//Placeholder

/*! http://mths.be/placeholder v2.0.8 by @mathias */
; (function (window, document, $) {

    var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
    var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
    var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
    var prototype = $.fn;
    var valHooks = $.valHooks;
    var propHooks = $.propHooks;
    var hooks;
    var placeholder;

    if (isInputSupported && isTextareaSupported) {

        placeholder = prototype.placeholder = function () {
            return this;
        };

        placeholder.input = placeholder.textarea = true;

    } else {

        placeholder = prototype.placeholder = function () {
            var $this = this;
            $this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
				    'focus.placeholder': clearPlaceholder,
				    'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
            return $this;
        };

        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;

        hooks = {
            'get': function (element) {
                var $element = $(element);

                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value;
                }

                return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
            },
            'set': function (element, value) {
                var $element = $(element);

                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value = value;
                }

                if (!$element.data('placeholder-enabled')) {
                    return element.value = value;
                }
                if (value == '') {
                    element.value = value;
                    // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
                    if (element != safeActiveElement()) {
                        // We can't use `triggerHandler` here because of dummy text/password inputs :(
                        setPlaceholder.call(element);
                    }
                } else if ($element.hasClass('placeholder')) {
                    clearPlaceholder.call(element, true, value) || (element.value = value);
                } else {
                    element.value = value;
                }
                // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
                return $element;
            }
        };

        if (!isInputSupported) {
            valHooks.input = hooks;
            propHooks.value = hooks;
        }
        if (!isTextareaSupported) {
            valHooks.textarea = hooks;
            propHooks.value = hooks;
        }

        $(function () {
            // Look for forms
            $(document).delegate('form', 'submit.placeholder', function () {
                // Clear the placeholder values so they don't get submitted
                var $inputs = $('.placeholder', this).each(clearPlaceholder);
                setTimeout(function () {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });

        // Clear placeholder values upon page reload
        $(window).bind('beforeunload.placeholder', function () {
            $('.placeholder').each(function () {
                this.value = '';
            });
        });

    }

    function args(elem) {
        // Return an object of element attributes
        var newAttrs = {};
        var rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function (i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }

    function clearPlaceholder(event, value) {
        var input = this;
        var $input = $(input);
        if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
            if ($input.data('placeholder-password')) {
                $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
                // If `clearPlaceholder` was called from `$.valHooks.input.set`
                if (event === true) {
                    return $input[0].value = value;
                }
                $input.focus();
            } else {
                input.value = '';
                $input.removeClass('placeholder');
                input == safeActiveElement() && input.select();
            }
        }
    }

    function setPlaceholder() {
        var $replacement;
        var input = this;
        var $input = $(input);
        var id = this.id;
        if (input.value == '') {
            if (input.type == 'password') {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().attr({ 'type': 'text' });
                    } catch (e) {
                        $replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
                    }
                    $replacement
						.removeAttr('name')
						.data({
						    'placeholder-password': $input,
						    'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
                    $input
						.data({
						    'placeholder-textinput': $replacement,
						    'placeholder-id': id
						})
						.before($replacement);
                }
                $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
                // Note: `$input[0] != input` now!
            }
            $input.addClass('placeholder');
            $input[0].value = $input.attr('placeholder');
        } else {
            $input.removeClass('placeholder');
        }
    }

    function safeActiveElement() {
        // Avoid IE9 `document.activeElement` of death
        // https://github.com/mathiasbynens/jquery-placeholder/pull/99
        try {
            return document.activeElement;
        } catch (err) { }
    }

}(this, document, jQuery));


$(document).bind('mobileinit', function () {
    $.mobile.loader.prototype.options.text = "loading";
    $.mobile.loader.prototype.options.textVisible = false;
    $.mobile.loader.prototype.options.theme = "z";
    $.mobile.loader.prototype.options.html = '<div class="load"><div class="content-load"><span class="expand"></span></div></div>';
});
var slJsHost = (("https:" == document.location.protocol) ? "https://" : "http://");
var slId = 10393;
var slHostname = slJsHost + 'www.sejalive.com.br/';
function open_sejalive() {
    window.open(slHostname + 'atendimento_cliente/atendimento/index/' + slId, null, "height=650,width=626,status=yes,toolbar=no,menubar=no,location=no");
}

if (slId == undefined) {
    alert('Erro Sejalive: O código de inclusão do chat está inválido');
}
//function sejalive_chat()
//{
//	document.write('<div class="img_headphone"></div><div class="the_chat_details"><span class="desc_chat">Suporte Técnico<br /><strong>ONLINE</strong></span><span class="icon-cancel-circle"></span><div class="clear"></div><a onclick="open_sejalive()" class="btn btn-info btn-block">Iniciar Chat</a><label class="keep_closed"><input type="checkbox" data-role="none" />Manter fechado</label></div><div class="clear"></div>');
//}

function sejalive_chat_v2() {
    jQuery("#script_sejalive").html('<img style="cursor:pointer" src="' + slHostname + 'atendimento_cliente/status_atendimento/img_status_atendimento/' + slId + '" />');
    chatOnline(true);
}


function setCookie(c_name, value) {
    var exdate = new Date();
    var exdays = 1;
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}


function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

//Chat Online
function chatOnline(isKeepClosedChat) {
    if (isKeepClosedChat == false) {
        $(".the_chat").addClass("chat_opened");
    } else {
        $(".the_chat").addClass("chat_closed");
    }

    $(".the_chat").fadeIn();

    $(".the_chat_details .icon-cancel-circle").click(function () {
        $(".the_chat_details").animate({ "margin-right": "-133px" }, function () {
            $(".the_chat").removeClass("chat_opened").addClass("chat_closed");
            return false;
        });
    });
    $(".img_headphone").click(function () {
        $(".the_chat").addClass("chat_opened").removeClass("chat_closed").fadeIn(10, function () {
            $(".the_chat_details").animate({ "margin-right": "0" });
        });
    });
}


$(document).ready(function () {

    //Funções
    $(".load").hide(10);
    //$(".content-load .expand").animate({"width":"100%"}, function(){
    //});
    $(".content, .footer").fadeIn(100);

    //Posição do Footer
    //footerPosition();

    //Resize
    $(window).resize(function () {
        //    footerPosition();
    });

    //Sistemas Online
    $(".online_systems_door").click(function () {
        $(".online-systems").slideDown();
        $(".online-systems-bg").show();
        return false;
    });
    $(".online-systems-bg").click(function () {
        $(".online-systems").slideUp();
        $(".online-systems-bg").hide();
        return false;
    });

    //Menus
    if ($('.sub-menu')[0]) {
        $('.sub-menu').hover(
           function () {
               $(this).children("ul").slideDown(250);
               $(this).children("a").addClass("active-menu");
           },
           function () {
               $(this).children("ul").slideUp(50);
               $(this).children("a").removeClass("active-menu");
           }
        );
        $(".top_user.sub-menu ul li").css({ "width": "200px" });
    }

    //Posição do Footer
    function footerPosition() {
        var contentHeightIni = $(".ui-page").height();
        var contentHeight = contentHeightIni + 80;
        var windowHeight = $(window).height();
        if (windowHeight >= contentHeight) {
            $(".footer").css({ "position": "fixed", "bottom": "0px" });
        }
    }

    //Nova Busca Effects

    $(".the-element").click(function () {
        var theRel = $(this).attr("rel");
        $('input[id*="hdnFldConsultasAvancadas"]').val('1');
        setConsultasAvancadas(theRel);
        $('form').attr('onkeypress', "javascript:return WebForm_FireDefaultButton(event, 'ctl00_ContentPlaceHolder1_btnNovaConsulta')");
        if (theRel == "LocalizacaoMaeTelefones") {
            $(".bg-escolhaSuaConsulta").fadeOut();
            $(".escolhaSuaConsulta").fadeOut();
        }
    });

    //$('.the-list-consultas ul li input').click(function () {
    $('input[name="ctl00$ContentPlaceHolder1$radio"]').click(function () {
        $(".bg-escolhaSuaConsulta").fadeOut();
        $(".escolhaSuaConsulta").fadeOut();
    });

    $(".save-section-consulta-button, .close-choose-consulta").click(function () {
        $(".bg-escolhaSuaConsulta").fadeOut();
        $(".escolhaSuaConsulta").fadeOut();
        if ($("#consulta-unitmailing").find("span[class='icon-checkmark-circle']").length > 0) {
            if ($("#ListArqUnitmailing").find("input:checked").length > 0) {
                var idFila = $("#ListArqUnitmailing").find("input:checked").val();
                var url = location.href.substring(0, location.href.lastIndexOf("/")) + "/GenericHandler/GetArquivosUnitmailing.ashx";
                var parametros = { IdFila: idFila }
                $.ajax({
                    type: 'POST',
                    url: url,
                    data: parametros,
                    beforeSend: function () {
                        abrirModalAguarde();
                    },
                    success: function (data) {
                        if (data != "0") {
                            $("#ctl00_ContentPlaceHolder1_txtUnitmailing").val(data);
                            $('input[id*="hdnFieldIdFilaUnitmailing"]').val(idFila);
                            $("#ctl00_ContentPlaceHolder1_btnNovaConsulta").click();
                        }
                        else {
                            alert("Não há mais documentos na fila.");
                            fecharModalAguarde();
                        }
                    },
                    error: function () {
                        fecharModalAguarde();
                    }
                })
            }
        }
    });
    $(".the-text").click(function () {
        $(".bg-escolhaSuaConsulta").fadeIn();
        $(".escolhaSuaConsulta").show("blind");
    });

    $(".lists-consultas li, .choose-element li").click(function () {
        verificarConsultaPor();
    });

    $('#selectCidade').change(function () {
        if ($(this).val() != '0') {
            $(".address-first").hide();
            $('#divEstadoCidade').html('').append('<p>' + $('#selectEstado').val() + '</p><p>' + $('#selectCidade :selected').text() + '</p>');
            $(".address-second").fadeIn();
            $('input[id*="txtPesqLogradouro"]').focus();
        }
    });
    $(".anteriorEstadoCidade").hover(
        function () {
            $(".closeAnteriorEstadoCidade").css({ "color": "#444" });
        },
        function () {
            $(".closeAnteriorEstadoCidade").css({ "color": "#EEE" });
        }
    );
    $(".closeAnteriorEstadoCidade").hover(
        function () {
            $(this).css({ "color": "#444" });
        },
        function () {
            $(this).css({ "color": "#EEE" });
        }
    );
    $(".closeAnteriorEstadoCidade").click(function () {
        $(".address-second").hide();
        $(".address-first").fadeIn();
    });

    $(".select-endereco-trat").click(function () {
        $(".tratamento-result, .endereco-tratamento").show();
        $(".pessoas-tratamento, .box-busca, .actual-search, .tab_recursos").hide();
        var thisSearch = $(this).children("label").text();
        $(".tipo-tratamento").text(thisSearch);
    });
    $(".select-pessoas-trat").click(function () {
        $(".tratamento-result, .pessoas-tratamento").show();
        $(".endereco-tratamento, .box-busca, .actual-search, .tab_recursos").hide();
        var thisSearch = $(this).children("label").text();
        $(".tipo-tratamento").text(thisSearch);
    });

    //Tables
    $(".table-striped tr:even").css({ "background": "#ececec" });

    //Forms
    $(".form-info input, .form-error input").focusin(function () {
        $(this).parent().parent().children("p").slideUp();
    });
    $(".form-info input").focusout(function () {
        $(this).parent().parent().removeClass("form-info");
    });
    $(".form-error input").focusout(function () {
        $(this).parent().parent().removeClass("form-error");
    });

    ////Botões
    //$("select").attr("data-icon", "");
    //$("select").parent().attr("data-icon", "");

    //Home
    $(".the_home_top").effect("slide", 250);
    $(".the_legends").hover(
        function () {
            $(".single_the_legends").slideDown();
        },
        function () {
            $(".single_the_legends").slideUp();
        }
    );

    //Datepicker
    $(".datepicker").datepicker($.datepicker.regional["pt-BR"]);

    //Banner UnitBoard
    if ($(".banner_passo_passo").eq([0])) {

        $("[rel='banner_1']").click(function () {
            $(".stage_banner").animate({ "margin-top": "0px" });
            $(".banner_go_to").removeClass("banner_go_to_active");
            $(this).addClass("banner_go_to_active");
        });
        $("[rel='banner_2']").click(function () {
            $(".stage_banner").animate({ "margin-top": "-352px" });
            $(".banner_go_to").removeClass("banner_go_to_active");
            $(this).addClass("banner_go_to_active");
        });
        $("[rel='banner_3']").click(function () {
            $(".stage_banner").animate({ "margin-top": "-704px" });
            $(".banner_go_to").removeClass("banner_go_to_active");
            $(this).addClass("banner_go_to_active");
        });
        $("[rel='banner_4']").click(function () {
            $(".stage_banner").animate({ "margin-top": "-1056px" });
            $(".banner_go_to").removeClass("banner_go_to_active");
            $(this).addClass("banner_go_to_active");
        });
        $("[rel='banner_5']").click(function () {
            $(".stage_banner").animate({ "margin-top": "-1408px" });
            $(".banner_go_to").removeClass("banner_go_to_active");
            $(this).addClass("banner_go_to_active");
        });

        $(".go_to_2").click(function () {
            $(".stage_banner").animate({ "margin-top": "-352px" });
            $(".banner_go_to").removeClass("banner_go_to_active");
            $("[rel='banner_2']").addClass("banner_go_to_active");
        });

    }

    var windowWidthChat = $(window).width();
    //alert(windowWidthChat);
    if (windowWidthChat > 381) {
        //alert(windowWidthChat);
        sejalive_chat_v2();
    }

    var theRel = 'document';
    if (($('input[id*="rbtLocalizacao"]').is(':checked'))
        || ($('input[id*="rbtMaisTelefones"]').is(':checked'))
        || ($('input[id*="rbtSituacaoCadastral"]').is(':checked'))
        || ($('input[id*="rbtObito"]').is(':checked'))
        || ($('input[id*="rbtPerfilSocio"]').is(':checked'))
        || ($('input[id*="rbtPerfil"]').is(':checked'))
        || ($('input[id*="rbtContatoRuim"]').is(':checked'))
        || ($('input[id*="rbtCCF"]').is(':checked'))
        || ($('input[id*="rbtPErelacionada"]').is(':checked'))
        || ($('input[id*="rbtParticipEmpresarial"]').is(':checked'))
        || ($('input[id*="rbtConsultou"]').is(':checked'))
        || ($('input[id*="rbtInadimplencias"]').is(':checked'))
        || ($('input[id*="rbtSgdConsultaVeicular"]').is(':checked'))
        || ($('input[id*="rbtCnh"]').is(':checked'))
        || ($('input[id*="rbtScoreCreditoRecorrenteSW"]').is(':checked'))
        || ($('input[id*="rbtScoreCreditoEventualSW"]').is(':checked')))
        theRel = 'document';
    else
        if (($('input[id*="rbtPessoaEmpresaTelefone"]').is(':checked')) || ($('input[id*="rbtEnderecoDoTelefone"]').is(':checked')))
            theRel = 'phone';
        else
            if ($('input[id*="rbtNomes"]').is(':checked'))
                theRel = 'name';
            else
                if (($('input[id*="rbtPessoaEmpresaEndereco"]').is(':checked')) || ($('input[id*="rbtTelefoneDoEndereco"]').is(':checked')))
                    theRel = 'address';
                else
                    if ($('input[id*="rbtCEP"]').is(':checked'))
                        theRel = 'cep';
                    else
                        if ($('input[id*="rbtEmail"]').is(':checked'))
                            theRel = 'email';
                        else
                            if ($('input[id*="rbtINSS"]').is(':checked') || $('input[id*="rbtHisconINSS"]').is(':checked'))
                                theRel = 'inss';
                            else
                                if ($('input[id*="rbtMLocalizacaoMaeTelefones"]').is(':checked'))
                                    theRel = 'LocalizacaoMaeTelefones';
                                else
                                    if ($('input[id*="rbtVSgdConsultaVeicularDetalhada"]').is(':checked'))
                                        theRel = 'veiculos';
                            else
                                        theRel = 'document';

    if (jQuery.inArray($('#ctl00_ContentPlaceHolder1_HIDEN_IdCliente').val(), ["5524","6624"]) > -1) {
        theRel = 'LocalizacaoMaeTelefones';
        $('#ctl00_ContentPlaceHolder1_divLateralPerfil').css('visibility', 'hidden')
    }

    setConsultasAvancadas(theRel);

    verificarConsultaPor();

    $("#consulta-unitmailing").click(function () {
        GetFilasUnitmailing();
    });
});

function setConsultasAvancadas(theRel) {
    $(".tratamento-result, .endereco-tratamento, .pessoas-tratamento").hide();
    $(".box-busca, .actual-search, .tab_recursos").show();

    $(".type-search").removeClass("type-search-active").addClass("type-search-inactive");
    $(".type-" + theRel).addClass("type-search-active").removeClass("type-search-inactive");

    $(".the-list-consultas").removeClass("the-list-active").addClass("the-list-inactive");
    $(".the-" + theRel + "-list").removeClass("the-list-inactive").addClass("the-list-active");

    $(".the-list-consultas ul li input").prop("disabled", true);
    $(".the-" + theRel + "-list ul li input").prop("disabled", false);

    $(".the-list-consultas ul li input").prop("checked", false);
    $(".the-" + theRel + "-list ul li input").eq(parseInt($('input[id*="hdnFldConsultasAvancadas"]').val()) - 1).prop("checked", true);

    $(".the-element .icon-checkmark-circle").remove();
    $('.the-' + theRel + '-choose').append("<span class='icon-checkmark-circle'></span>");

    if (theRel == 'document')
        $('input[id*="hdnFieldPesquisa"]').val('POR_CPF');
    else if (theRel == 'phone')
        $('input[id*="hdnFieldPesquisa"]').val('POR_TELEFONE');
    else if (theRel == 'address')
        $('input[id*="hdnFieldPesquisa"]').val('POR_ENDERECO');
    else if (theRel == 'name')
        $('input[id*="hdnFieldPesquisa"]').val('POR_NOME');
    else if (theRel == 'cep')
        $('input[id*="hdnFieldPesquisa"]').val('POR_CEP');
    else if (theRel == 'email')
        $('input[id*="hdnFieldPesquisa"]').val('POR_EMAIL');
    else if (theRel == 'inss')
        $('input[id*="hdnFieldPesquisa"]').val('POR_BENEFICIO');
    else if (theRel == 'unitmailing')
        $('input[id*="hdnFieldPesquisa"]').val('POR_UNITMAILING_CPF');
    else if (theRel == 'LocalizacaoMaeTelefones')
        $('input[id*="hdnFieldPesquisa"]').val('POR_DOCUMENTO_TELEFONES');
    else if (theRel == 'veiculos')
        $('input[id*="hdnFieldPesquisa"]').val('POR_VEICULO');
}

function verificarConsultaPor() {
    var thecheck = $("input:radio:checked").parent().parent().children("label").text();
    $(".the-actual-search").text(thecheck);

    var consultby = $("input:radio:checked").parent().parent().parent().attr("rel");
    var consultbyR = $(".choose-element ul li span.the-element[rel='" + consultby + "']").text();

    $(".the-actual-consult").text(consultbyR);
}
