extends Area2D

onready var x= preload("res://assests/x.png")
onready var o= preload("res://assests/o.png")
var selected= false

func _ready():
	$mouse_over.hide()
	


func _on_POS_mouse_entered() -> void:
	$mouse_over.show()
	

func _on_POS_mouse_exited() -> void:
	$mouse_over.hide()
	
func play_x():
	if(!selected):
		$x_o.set_texture(x)
func play_o():
	if(!selected):
		$x_o.set_texture(o)

func _on_POS_input_event(viewport: Node, event: InputEvent, shape_idx: int) -> void:
	if(event is InputEventMouseButton):
		if(event.button_index == BUTTON_LEFT):
			play_x()
			$mouse_over.hide()
			selected = true
		else:
			play_o()
			$mouse_over.hide()
			selected = true
