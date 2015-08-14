/*-----------------------------------------------------------------------------
| Copyright (c) 2015 Phosphor Contributors
| Copyright (c) 2015 Kyle Kelley
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
module example {

 import BoxPanel = phosphor.widgets.BoxPanel;
 import SidecarWidget = phosphor.sidecar.SidecarWidget;
 import TermWidget = phosphor.terminal.TermWidget;


function main(): void {
    var panel = new BoxPanel();

    var protocol = (window.location.protocol.indexOf("https") === 0) ? "wss" : "ws";
    var sc_ws_url = protocol + "://" + window.location.host + "/swebsocket";
    var t_ws_url = protocol + "://" + window.location.host + "/twebsocket";

    var sidecar = new SidecarWidget(sc_ws_url);
    var term = new TermWidget(t_ws_url);

    panel.addWidget(term, 1);
    panel.addWidget(sidecar, 2);

    panel.attach(document.getElementById('main'));
    panel.fit();

    window.onresize = () => panel.fit();

}

window.onload = main;

} // module example
