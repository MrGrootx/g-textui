function SendReactMessage(action, data)
  SendNUIMessage({ action = action, data = data })
end

function showTextUI(id, text, keybind)
  SendReactMessage('showTextUi', { id = id, label = text, keybind = keybind })
end

function hideText(id)
  SendReactMessage('hideTextUi', { id = id })
end

RegisterCommand('textuitest', function(src, args, raw)
  showTextUI("textui_test_G", "Groot Development", "G")
  Wait(3000)
  showTextUI("textui_test_E", "Player Vehicle shop", "E")

  Wait(3000)

  hideText("textui_test_G")
  Wait(5000)

  hideText("textui_test_E")
end, true)

exports('showTextUI', showTextUI)
exports('hideText', hideText)

