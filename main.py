from midi_to_noteseq import midi_file_to_note_sequence

midi_data = './static/resources/M96.MID'
midi_file = open(midi_data)
midi_to_note_sequence(midi_file)
